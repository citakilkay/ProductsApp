import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';

interface DataType {
    key: number;
    id?: string;
    creatorUser?: object;
    name: string;
    legalNumber: number;
    website: string;
    incorparationCountry: string;
    createdAt: Date;
    updateAt: Date;
}

const data: DataType[] = [
    {
        key: 1,
        id: "2",
        creatorUser: { username: "ilkay" },
        name: "1",
        legalNumber: 12133,
        website: "",
        incorparationCountry: "",
        createdAt: new Date(),
        updateAt: new Date()
    }, {
        key: 1,
        id: "2",
        creatorUser: { username: "ilkay" },
        name: "1",
        legalNumber: 12133,
        website: "",
        incorparationCountry: "",
        createdAt: new Date(),
        updateAt: new Date()
    }, {
        key: 1,
        id: "2",
        creatorUser: { username: "ilkay" },
        name: "1",
        legalNumber: 12133,
        incorparationCountry: "",
        website: "",
        createdAt: new Date(),
        updateAt: new Date()
    },
];

const columns: ColumnsType<DataType> = [
    { title: "Name", dataIndex: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
    { title: "Legal Number", dataIndex: "legalNumber", sorter: (a, b) => (a.legalNumber - b.legalNumber) },
    { title: "Incorparation Country", dataIndex: "incorparationCountry", sorter: (a, b) => a.incorparationCountry.localeCompare(b.incorparationCountry) },
    { title: "Website", dataIndex: "website", sorter: (a, b) => a.website.localeCompare(b.website) },
]
const DataTableCompany = () => {
    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
    const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter as SorterResult<DataType>);
    };
    return (
        <Table dataSource={data} columns={columns} onChange={handleChange} />
    )
}

export default DataTableCompany