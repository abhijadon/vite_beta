import { useState, useEffect } from 'react';
import Card from '@mui/joy/Card';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Button from '@mui/material/Button';
import RolesForm from '@/forms/Roleform';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Abhishek from '../tableList/index'
import { Spin } from 'antd';
const TeamsList = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/teams/list');
                const result = await response.json();

                console.log('API Response:', result);

                if (result.success) {
                    setTeams(result.result || []);
                } else {
                    console.error('Error fetching teams:', result.message);
                }
            } catch (error) {
                console.error('Error fetching teams:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const openUserListModal = (team) => {
        setSelectedTeam(team);
    };
    const openRole = () => {
        setSelectedRole(true); // Set to true to indicate that a role is selected
    };
    const closeUserListModal = () => {
        setSelectedTeam(null);
    };

    const closeRoleModal = () => {
        setSelectedRole(null);
    };
    return (
        <>
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className="text-[20px] font-thin mb-4">Roles List</h3>
                    <Button onClick={() => openRole()} className='bg-blue-500 h-8 capitalize'>Add Roles</Button>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-3">
                        {loading ? (
                            <Spin />
                        ) : (
                            teams.map((team) => (
                                <Card key={team._id} variant="outlined" className="shadow-lg">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-sm text-gray-500 font-thin capitalize">
                                            Total {team.teamMembers.length} users
                                        </h4>
                                        <AvatarGroup max={4} className="cursor-pointer">
                                            {team.teamMembers.map((user) => (
                                                <Avatar
                                                    key={user._id}
                                                    alt={user.fullname}
                                                    src={`/static/images/avatar/${user._id}.jpg`}
                                                />
                                            ))}
                                        </AvatarGroup>
                                    </div>
                                    <div className="flex justify-between items-center mt-10" style={{ color: team.textColor }}>
                                        <div>
                                            <h4 className="text-base font-extralight">{team.teamName}</h4>
                                        </div>
                                        <div>
                                            <Button onClick={() => openUserListModal(team)} className='bg-blue-500 h-8'>View Users</Button>
                                        </div>
                                    </div>

                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </div >

            <Dialog open={!!selectedTeam} onClose={closeUserListModal}>
                <DialogTitle>{selectedTeam?.teamName} Users</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        {/* Add more user details if needed */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {selectedTeam?.teamMembers.map((user) => (
                                        <TableRow key={user._id}>
                                            <TableCell>{user.fullname}</TableCell>
                                            <TableCell>{user.username}</TableCell>
                                            {/* Add more user details if needed */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeUserListModal} className='text-red-500 font-thin font-mono'>Close</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={!!selectedRole} onClose={closeUserListModal}>
                <DialogTitle>Roles form</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <RolesForm />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeRoleModal} className='text-red-500 font-thin font-mono'>Close</Button>
                </DialogActions>
            </Dialog>



            <Abhishek />
        </>
    );
};

export default TeamsList;
