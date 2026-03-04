import React from 'react';
import { Table, Typography } from 'antd';
import paperData from './data.json';

const { Title } = Typography;

const App: React.FC = () => {
  const columns = [
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Venue', dataIndex: 'venue', key: 'venue' },
  ];

  return (
    <div style={{ padding: '50px' }}>
      <Title level={2}>Infrared-Visible Image Fusion</Title>
      <Table dataSource={paperData} columns={columns} />
    </div>
  );
};

export default App;