import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Spin, Input, Button, message, Avatar } from 'antd';
import moment from 'moment';

export default function Comment({ id }) {
    const [commentData, setCommentData] = useState([]); // To hold fetched comment data
    const [isLoading, setIsLoading] = useState(true); // Loading state
    // Function to fetch comments
    const fetchComments = async () => {
        setIsLoading(true); // Indicate loading state
        try {
            const response = await axios.get(`lead/getComment/${id}`); // Fetch comments
            if (response.data.comments) { // Check if response indicates success
                setCommentData(response.data.comments); // Store fetched comments
            } else {
                message.error(response.data.message); // Dynamic error message
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
            message.error('Error fetching comments'); // Generic error message
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    // Fetch comments on component mount or when `id` changes
    useEffect(() => {
        fetchComments(); // Trigger comment fetch
    }, [id]); // Dependency array to avoid unnecessary re-renders


    // Display loading spinner while fetching data
    if (isLoading) {
        return <Spin tip="Loading comments..." />;
    }

    return (
        <div>
            <div className="w-full bg-white">
                <div className="grid grid-cols-3 justify-items-center">
                    {commentData.length > 0 ? (
                        commentData.map((comment, index) => (
                            <div key={index} className="border-blue-200 border rounded-md p-3 my-2">
                                <div className="flex gap-3 items-center justify-between">
                                    <div>
                                        <Avatar
                                            className="last bg-blue-50"
                                            style={{
                                                color: '#f56a00',
                                            }}
                                            size="large"
                                        >
                                            {comment.userId?.fullname?.charAt(0).toUpperCase()}
                                        </Avatar>
                                        <span className="font-thin text-base uppercase ml-1">
                                            {comment.userId?.fullname || 'User Name'}
                                        </span>
                                    </div>

                                    <div className="text-gray-700 text-sm">
                                        {moment(comment.timestamp).format('DD/MM/YYYY')}
                                        <br />
                                        <span className='ml-10 text-blue-400 text-xs'>
                                            {moment(comment.timestamp).format('HH:mm')}
                                        </span>
                                    </div>
                                </div>
                                <h2 className="text-black mt-5 text-start ml-5 capitalize">
                                    {comment.commentText}
                                </h2>
                            </div>
                        ))
                    ) : (
                        <p>No comments found.</p> // Fallback if there's no data
                    )}
                </div>
            </div>
        </div>
    );
}
