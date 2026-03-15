import React from 'react';
import { Space, Table, Tag } from 'antd';

import { datasetRows } from './catalog.data';
import DatasetScaleChart from './DatasetScaleChart';

const taskColors = {
  'Object Detection': 'blue',
  'Semantic Segmentation': 'orange',
  'Instance Segmentation': 'purple',
  'Single-object Tracking (SOT)': 'cyan',
  'Multi-object Tracking (MOT)': 'green',
};

const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    width: 72,
    fixed: 'left',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 180,
    fixed: 'left',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    width: 96,
    sorter: (a, b) => a.year - b.year,
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Task',
    dataIndex: 'task',
    width: 240,
    filters: Object.keys(taskColors).map((item) => ({ text: item, value: item })),
    onFilter: (value, record) => record.task.includes(value),
    render: (value) =>
      value.map((item) => (
        <Tag color={taskColors[item] || 'geekblue'} key={item}>
          {item}
        </Tag>
      )),
  },
  {
    title: 'Annotation',
    dataIndex: 'annotation',
    width: 180,
    render: (value) =>
      value.map((item) => (
        <Tag color={item === '2D pixel' ? 'gold' : 'volcano'} key={item}>
          {item}
        </Tag>
      )),
  },
  {
    title: 'Sensor Data Representation',
    dataIndex: 'representation',
    width: 280,
    render: (value) => (
      <div className="stacked-lines">
        {value.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    ),
  },
  {
    title: 'Link',
    dataIndex: 'links',
    width: 220,
    render: (value) => (
      <Space size={[8, 8]} wrap>
        {value.map((item) => (
          <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </Space>
    ),
  },
];

export default function Dataset() {
  return (
    <div className="home-page-wrapper section-shell" id="datasets">
      <div className="home-page section-block">
        <div className="title-wrapper">
          <h1 className="title-h1">Infrared-Visible Fusion Datasets</h1>
        </div>
        <DatasetScaleChart />
        <div className="table-panel">
          <Table
            bordered
            columns={columns}
            dataSource={datasetRows}
            pagination={{ pageSize: 8, hideOnSinglePage: true }}
            scroll={{ x: 1280 }}
            rowKey="key"
          />
        </div>
      </div>
    </div>
  );
}
