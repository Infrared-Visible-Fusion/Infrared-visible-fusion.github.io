import React from 'react';
import { Table, Tag } from 'antd';

import { methodRows } from './catalog.data';

const taskPalette = {
  'Single IVIF (Generation)': 'gold',
  'Object Detection': 'blue',
  'Semantic Segmentation': 'orange',
  'Instance Segmentation': 'purple',
  'Single-object Tracking': 'cyan',
  'Multi-object Tracking': 'green',
};

const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    width: 72,
    fixed: 'left',
  },
  {
    title: 'Short Name',
    dataIndex: 'shortName',
    width: 160,
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
    width: 220,
    render: (value) =>
      value.map((item) => (
        <Tag color={taskPalette[item] || 'geekblue'} key={item}>
          {item}
        </Tag>
      )),
  },
  {
    title: 'Annotation',
    dataIndex: 'annotation',
    width: 120,
  },
  {
    title: 'Modalities',
    dataIndex: 'modalities',
    width: 120,
  },
  {
    title: 'Network Architecture',
    dataIndex: 'architecture',
    width: 260,
  },
  {
    title: 'Fusion Level',
    dataIndex: 'fusionLevel',
    width: 150,
  },
  {
    title: 'Target Dataset',
    dataIndex: 'dataset',
    width: 140,
  },
  {
    title: 'Source Code',
    dataIndex: 'codeLink',
    width: 140,
    render: (value) =>
      value ? (
        <a href={value} target="_blank" rel="noreferrer">
          GitHub
        </a>
      ) : (
        <span className="muted-copy">Not released</span>
      ),
  },
];

export default function Methods() {
  return (
    <div className="home-page-wrapper section-shell" id="methods">
      <div className="home-page section-block">
        <div className="title-wrapper">
          <h1 className="title-h1">Representative Methods</h1>
        </div>
        <div className="table-panel">
          <Table
            bordered
            columns={columns}
            dataSource={methodRows}
            pagination={{ pageSize: 10, hideOnSinglePage: true }}
            scroll={{ x: 1500 }}
            rowKey="key"
          />
        </div>
      </div>
    </div>
  );
}
