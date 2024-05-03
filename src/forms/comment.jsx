import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Spin, Input, Button, message, Avatar } from 'antd';
import moment from 'moment';

export default function Comment({  id }) {
    const [commentData, setCommentData] = useState([]); // To hold fetched comment data
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [loading, setLoading] = useState(false); // Loading state for form
    const [commentText, setCommentText] = useState(''); // State for the text area

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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form refresh
        setLoading(true); // Indicate loading state

        try {
            const response = await axios.post(`lead/comment/${id}`, { commentText }); // Post new comment
            if (response.data.message) { // Check if response indicates success
                message.success(response.data.message);  // Dynamic success message
                fetchComments(); // Refresh comments
                setCommentText(''); // Clear comment text area
            } else {
                message.error(response.data.message || 'Failed to post comment'); // Dynamic error message
            }
        } catch (error) {
            console.error('Error posting comment:', error);
            message.error('Error posting comment'); // Generic error message
        } finally {
            setLoading(false); // Reset loading state after post
        }
    };

    // Display loading spinner while fetching data
    if (isLoading) {
        return <Spin tip="Loading comments..." />;
    }

    return (
        <div>
            <div className="w-full bg-white">
                <div className="flex flex-col">
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

                <form onSubmit={handleSubmit}> {/* Attach submit handler */}
                    <div className="w-full my-10">
                        <Input.TextArea className='border border-blue-600'
                        rows={4}
                            value={commentText}
                            placeholder="Type your comment"
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                    </div>

                    <div className="w-full flex justify-end px-3">
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Post Comment
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
