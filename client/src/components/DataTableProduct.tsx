import React, { useState } from 'react'
import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';

const DataTable = (props: any) => {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination: any, filters: any, sorter: any) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    return (
        <>
            <Table columns={props.columns} dataSource={props.data} onChange={props.handleChange} />
        </>
    )
}

export default DataTable;