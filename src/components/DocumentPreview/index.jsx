import React from 'react';
import { Image, Button, Space } from 'antd';
import {
    DownloadOutlined,
    SwapOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    ZoomOutOutlined,
    ZoomInOutlined,
} from '@ant-design/icons';

const DocumentPreview = ({ documentUrls, onDownload }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {documentUrls.map((doc, index) => (
                <div key={index} className="w-52 flex flex-col items-center">
                    <Image
                        width={200}
                        src={doc?.downloadURL}
                        preview={{
                            toolbarRender: (
                                _,
                                {
                                    transform: { scale },
                                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                                },
                            ) => (
                                <Space size={12} className="toolbar-wrapper">
                                    <Button
                                        className="bg-transparent"
                                        onClick={() => onDownload(doc.downloadURL)}
                                        icon={<DownloadOutlined />}
                                    />
                                    <Button
                                        className="bg-transparent"
                                        onClick={onFlipY}
                                        icon={<SwapOutlined rotate={90} />}
                                    />
                                    <Button
                                        className="bg-transparent"
                                        onClick={onFlipX}
                                        icon={<SwapOutlined />}
                                    />
                                    <Button
                                        className="bg-transparent"
                                        onClick={onRotateLeft}
                                        icon={<RotateLeftOutlined />}
                                    />
                                    <Button
                                        className="bg-transparent"
                                        onClick={onRotateRight}
                                        icon={<RotateRightOutlined />}
                                    />
                                    <Button
                                        className="bg-transparent"
                                        onClick={onZoomOut}
                                        icon={<ZoomOutOutlined />}
                                        disabled={scale === 1}
                                    />
                                    <Button
                                        className="bg-transparent"
                                        onClick={onZoomIn}
                                        icon={<ZoomInOutlined />}
                                        disabled={scale === 50}
                                    />
                                </Space>
                            ),
                        }}
                    />
                    <span>{doc.originalFileName}</span>
                </div>
            ))}
        </div>
    );
};

export default DocumentPreview;
