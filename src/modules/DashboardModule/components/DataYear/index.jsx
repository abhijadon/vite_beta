// src/components/FilteredList.js
import { useState, useEffect } from 'react';
import { Menu, MenuItem, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Dropdown } from 'antd';
import { CiFilter } from 'react-icons/ci';

const FilteredList = () => {
    const [filter, setFilter] = useState('All');
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/lead/list');
                const result = await response.json();
                if (result.success) {
                    setData(result.result);
                } else {
                    console.error('Error fetching data:', result.error);
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const filteredData = filter === 'All' ? data : data.filter(item => item.customfields.status === filter);

    const handleIconClick = (event, item) => {
        setAnchorEl(event.currentTarget);
        setSelectedItem(item);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setSelectedItem(null);
    };

    const handleHistoryClick = () => {
        handleCloseMenu();
        setIsHistoryModalOpen(true);
    };

    const handleCloseHistoryModal = () => {
        setIsHistoryModalOpen(false);
    };

    const menu = (
        <Menu>
            <Menu.Item key="all" >
                All
            </Menu.Item>
            <Menu.Item key="today" >
                Today
            </Menu.Item>
            <Menu.Item key="week" >
                Week
            </Menu.Item>
            <Menu.Item key="tomorrow" >
                Tomorrow
            </Menu.Item>
            <Menu.Item key="month">
                Month
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="filtered-list-container">
            <div className='flex justify-between items-center'>
                <h3 className='text-base font-thin'>Transactions</h3>
                <div>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div className='mb-2'>
                            <CiFilter className='cursor-pointer text-xl font-thin text-blue-500' title='Filter' />
                        </div>
                    </Dropdown>
                </div>
            </div>

            <div className="filter-buttons">
                <button
                    className={`${filter === 'All' ? 'bg-transparent text-blue-500 border-b-2 border-blue-500' : 'text-blue-500 bg-transparent '
                        } py-2 px-4 rounded-l`}
                    onClick={() => setFilter('All')}
                >
                    All
                </button>
                <button
                    className={`${filter === 'Aproved' ? 'text-green-500 bg-transparent border-b-2 border-green-500' : 'text-green-500 bg-transparent'
                        } py-2 px-4`}
                    onClick={() => setFilter('Aproved')}
                >
                    Aproved
                </button>
                <button
                    className={`${filter === 'Reject' ? 'text-red-500  bg-transparent  border-b-2 border-red-500' : 'text-red-500 bg-transparent'
                        } py-2 px-4`}
                    onClick={() => setFilter('Reject')}
                >
                    Reject
                </button>
                {/* Add more filter buttons as needed */}
            </div>
            <div className="table-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map(item => (
                                <TableRow key={item._id}>
                                    <TableCell>{item.full_name}</TableCell>
                                    <TableCell>{item.contact.email}</TableCell>
                                    <TableCell>{item.customfields.status}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={(event) => handleIconClick(event, item)}
                                        >
                                            <MoreVert />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl) && selectedItem === item}
                                            onClose={handleCloseMenu}
                                        >
                                            <MenuItem onClick={handleHistoryClick}>History</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {/* History Modal */}
            <Dialog open={isHistoryModalOpen} onClose={handleCloseHistoryModal}>
                <DialogTitle>Payment History</DialogTitle>
                <DialogContent>
                    {selectedItem && selectedItem.customfields && selectedItem.customfields.payment_history && selectedItem.customfields.payment_history.length > 0 ? (
                        <ul>
                            {selectedItem.customfields.payment_history.map(payment => (
                                <li key={payment._id}>
                                    Paid Amount: {payment.paid_amount}, Timestamp: {new Date(payment.timestamp).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No payment history available.</p>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseHistoryModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FilteredList;