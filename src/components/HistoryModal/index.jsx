import React, { useState } from 'react';
import { Modal, Table } from 'antd';

const HistoryModal = ({ showHistoryModal, historyData, onClose }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [isTableVisible, setIsTableVisible] = useState(false);

    const handleUserClick = (user, dateTime) => {
        setSelectedUser(user);
        setSelectedDateTime(dateTime);
        setIsTableVisible(!isTableVisible); // Toggle table visibility
    };

    const getUniqueDates = () => {
        const dates = historyData?.history.map(historyItem => {
            const date = new Date(historyItem.updatedAt).toLocaleDateString('en-GB');
            const time = new Date(historyItem.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return `${date} - ${time}`;
        });
        return Array.from(new Set(dates));
    };

    const flattenUpdatedFields = (updatedFields) => {
        const flattenedData = [];
        for (const category in updatedFields) {
            for (const field in updatedFields[category]) {
                flattenedData.push({
                    category: category,
                    field: field,
                    oldValue: updatedFields[category][field].oldValue,
                    newValue: updatedFields[category][field].newValue
                });
            }
        }
        return flattenedData;
    };

    const data = historyData?.history
        .filter(historyItem => {
            const date = new Date(historyItem.updatedAt).toLocaleDateString('en-GB');
            const time = new Date(historyItem.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return `${date} - ${time}` === selectedDateTime && historyItem.updatedBy._id === selectedUser._id;
        })
        .flatMap((historyItem, index) => {
            return flattenUpdatedFields(historyItem.updatedFields).map((item, subIndex) => ({
                key: `${index}_${subIndex}`,
                category: item.category,
                field: item.field,
                oldValue: item.oldValue,
                newValue: item.newValue
            }));
        });

    const columns = [
        {
            title: 'Field',
            dataIndex: 'field',
            key: 'field',
            render: text => <span className="text-gray-500 font-thin capitalize">{text}</span>
        },
        {
            title: 'Old Value',
            dataIndex: 'oldValue',
            key: 'oldValue',
            render: text => <span className="text-gray-500 font-thin">{text}</span>
        },
        {
            title: 'New Value',
            dataIndex: 'newValue',
            key: 'newValue',
            render: text => <span className="text-blue-400 font-thin">{text}</span>
        },
    ];

    return (
        <Modal
            open={showHistoryModal} // Changed 'open' to 'visible'
            onCancel={onClose}
            footer={null}
            width={1300}
            className="history-modal"
        >
            <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-start">
                <div className="row-span-3 bg-gray-100 -ml-6 -mt-5 w-96 border-b border-r-2">
                    <h3 className='font-thin text-lg mt-5 ml-6'>
                        ERP History
                    </h3>
                    <div>
                        {getUniqueDates().map((dateTime, dateIndex) => (
                            <div key={dateIndex} className='border-b-2 border-gray-400 p-4'>
                                <div>
                                    <span className="timestamp font-thin text-[18px]">{dateTime}</span>
                                </div>
                                {historyData?.history.filter(historyItem => {
                                    const date = new Date(historyItem.updatedAt).toLocaleDateString('en-GB');
                                    const time = new Date(historyItem.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                                    return `${date} - ${time}` === dateTime;
                                }).slice(0, 2).map((historyItem, historyIndex) => {
                                    const user = historyItem.updatedBy;
                                    const time = new Date(historyItem.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                                    return (
                                        <div key={`${dateIndex}_${historyIndex}`} className='flex items-center justify-start cursor-pointer' onClick={() => handleUserClick(user, dateTime)}>
                                            <span className="green-bullet">&#8226;</span>
                                            <span className="fullname capitalize font-thin text-[12px]">{user && user.fullname}</span>
                     
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                {selectedUser && selectedDateTime && isTableVisible && (
                    <div>
                        <div>
                            <h4 className='font-thin text-base capitalize'>
                                <span className="green-bullet">&#8226;</span>
                                {`${selectedUser.fullname}`}
                            </h4>
                            <h6 className='font-thin text-xs mt-1'>({selectedDateTime})</h6>
                        </div>
                        <div className='mt-8'>
                            <Table columns={columns} dataSource={data} pagination={false} style={{ width: '800px' }} />
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default HistoryModal;
