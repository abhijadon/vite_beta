import { Modal, Spin, Table, Avatar } from 'antd';
import { request } from '@/request';
import useFetch from '@/hooks/useFetch';
import Tablelist from '../tableList';
import { useState } from 'react';
import "@/style/tailwind.css"

const DashboardModule = () => {
    // Fetch teams data
    const { result: teamsResult, isLoading: teamsLoading } = useFetch(() =>
        request.list({ entity: 'teams' })
    );

    const [isUserListModalVisible, setIsUserListModalVisible] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    const showUserListModal = (team) => {
        setSelectedTeam(team);
        setIsUserListModalVisible(true);
    };

    const handleUserListModalClose = () => {
        setIsUserListModalVisible(false);
        setSelectedTeam(null);
    };

    const statisticCards = teamsResult?.map((team, index) => (
        <div key={index}>
            <div className="whiteBox shadow-gray-400 mb-5 shadow-lg w-96 overflow-hidden h-40 p-3.5 rounded-sm space-y-14">
                <div className='flex justify-between items-center '>
                    <h3 className='font-mono font-thin text-start text-blue-500 underline underline-offset-1 text-base capitalize'>{team.teamName}</h3>
                    <AvatarGroup max={4}>
                        {team.teamMembers.map((member) => (
                            <Avatar
                                key={member._id}
                                alt={member.fullname}
                                src={`/static/images/avatar/${member._id}.jpg`}
                            />
                        ))}
                    </AvatarGroup>
                </div>
                {teamsLoading ? (
                    <Spin />
                ) : (
                    <>
                        <div className='flex items-center justify-between mb-10 text-center'>
                            <div className='font-mono font-semibold text-base capitalize'>{team.user.fullname}</div>
                            <div>
                                <button onClick={() => showUserListModal(team)} className='bg-blue-500  float-right rounded-md p-2 text-center font-mono font-thin capitalize'>View Users</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    ));
    const dataTableData = selectedTeam?.teamMembers.map((member, index) => ({
        key: index + 1,
        index: index + 1,
        ...member.user,  // Flatten the structure
        ...member,
    }));

    const dataTableColumns = [
        { title: 'S.No.', dataIndex: 'index', key: 'index' },
        { title: 'Fullname', dataIndex: 'fullname', key: 'fullname' },
        { title: 'Username', dataIndex: 'username', key: 'username' },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        // Add more columns as needed...
    ];

    return (
        <>
            <div className='grid grid-cols-3'>
                {statisticCards}
            </div>
            {/* User List Modal */}
            <Modal className='w-[1000px]'
                title={`${selectedTeam?.teamName} Users`}
                visible={isUserListModalVisible}
                onCancel={handleUserListModalClose}
                footer={null}
            >
                {teamsLoading ? (
                    <Spin />
                ) : (
                    <Table className="custom-table capitalize"
                        dataSource={dataTableData}
                        columns={dataTableColumns}
                        pagination={false}
                        rowKey={(record) => record.key}
                    />
                )}
            </Modal>
            <div className='mt-10'>
                <Tablelist />
            </div>
        </>
    );
}

export default DashboardModule;
