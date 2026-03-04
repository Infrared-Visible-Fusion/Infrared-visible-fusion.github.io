import React, { useState } from 'react';
import { Table, Typography, Button, Tag, Input } from 'antd';
import { GithubOutlined, SearchOutlined } from '@ant-design/icons';
import paperData from './data.json';

const { Title, Text } = Typography;

const App: React.FC = () => {
  // 增加搜索状态
  const [searchText, setSearchText] = useState('');

  // 根据搜索框的内容过滤数据
  const filteredData = paperData.filter((item) =>
    item.shortName.toLowerCase().includes(searchText.toLowerCase()) ||
    item.task.toLowerCase().includes(searchText.toLowerCase()) ||
    item.architecture.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a: any, b: any) => b.year - a.year, // 支持按年份点击排序
      defaultSortOrder: 'descend' as const,
      width: 90,
      align: 'center' as const,
    },
    {
      title: 'Method',
      dataIndex: 'shortName',
      key: 'shortName',
      render: (text: string) => <strong style={{ fontSize: '16px' }}>{text}</strong>,
      width: 150,
    },
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      // 根据不同的 Task 自动分配不同的炫酷颜色
      render: (task: string) => {
        let color = 'geekblue';
        if (task.includes('Detection')) color = 'volcano';
        else if (task.includes('Segmentation')) color = 'green';
        else if (task.includes('Tracking')) color = 'purple';
        else if (task.includes('Generation')) color = 'magenta';
        return <Tag color={color}>{task}</Tag>;
      },
      // 自动从数据中提取所有的 Task 作为筛选条件
      filters: Array.from(new Set(paperData.map(item => item.task))).map(task => ({ text: task as string, value: task as string })),
      onFilter: (value: any, record: any) => record.task === value,
      width: 200,
    },
    {
      title: 'Network Architecture',
      dataIndex: 'architecture',
      key: 'architecture',
    },
    {
      title: 'Target Dataset',
      dataIndex: 'dataset',
      key: 'dataset',
    },
    {
      title: 'Source Code',
      key: 'codeLink',
      align: 'center' as const,
      render: (_: any, record: any) => (
        record.codeLink ? (
          <Button type="primary" shape="round" icon={<GithubOutlined />} href={record.codeLink} target="_blank">
            Code
          </Button>
        ) : (
          <Text type="secondary">Coming Soon</Text>
        )
      ),
      width: 150,
    },
  ];

  return (
    <div style={{ padding: '40px 50px', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <Title level={2} style={{ margin: 0 }}>Awesome IVIF-AD Methods</Title>
        <Input.Search
          placeholder="Search by name, task, or architecture..."
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 400 }}
        />
      </div>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 20 }}
        bordered
        rowKey="key"
      />
    </div>
  );
};

export default App;