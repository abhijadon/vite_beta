import React from 'react';
import useFetch from '@/hooks/useFetch';
import { request } from '@/request';

export default function Index() {
    const { data: historyData, isLoading: historyLoading } = useFetch(() =>
        request.list({ entity: 'history' })
    );

    return (
        <div>
            {historyLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>History</h2>
                    {historyData && historyData.result && historyData.result.length > 0 ? (
                        historyData.result.map((entry, entryIndex) => (
                            <div key={entryIndex}>
                                <h3>Entry {entryIndex + 1}</h3>
                                <p>Document ID: {entry.documentId}</p>
                                {entry.changes.map((change, changeIndex) => (
                                    <div key={changeIndex}>
                                        <p>Field: {change.field}</p>
                                        <p>Timestamp: {change.timestamp}</p>
                                        <p>User ID: {change.newValue.userId}</p>
                                        {/* Render other relevant information */}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No history data available.</p>
                    )}
                </div>
            )}
        </div>
    );
}
