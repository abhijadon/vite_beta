import React from 'react';
import { Table } from 'antd';

const InstallmentTable = ({ installmentData, columns }) => {
    return <Table dataSource={installmentData} columns={columns} pagination={false} />;
};

export default InstallmentTable;
