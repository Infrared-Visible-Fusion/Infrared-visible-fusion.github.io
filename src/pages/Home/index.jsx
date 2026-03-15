/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Typography, Button, Table, Tag } from 'antd'; // 引入 antd 组件
import { GithubOutlined } from '@ant-design/icons';    // 引入图标

// 1. 引入你的导航栏（Logo 就在这里面）
import Nav0 from './Nav0';
import { Nav00DataSource } from './data.source';
import Banner3 from './Banner3';
import ReviewNav0 from './ReviewNav0';
import Characteristics from './CharacteristicsDynamic';
import Dataset from './Dataset';
import Methods from './Methods';
import Reference from './Reference';
import { Banner30DataSource, ReviewNav00DataSource } from './review.data';
import './less/antMotionStyle.less';
import './less/review.less';

// 🚨 如果你的 src/pages/Home/ 下已经有了 data.json，请把下面这行前面的双斜杠去掉！
// import paperData from './data.json'; 

const { Title, Paragraph } = Typography;

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

// ==================== 论文表格列配置 ====================
const columns = [
  {
    title: 'Year', dataIndex: 'year', key: 'year', sorter: (a, b) => b.year - a.year, defaultSortOrder: 'descend', width: 90, align: 'center',
  },
  {
    title: 'Method', dataIndex: 'shortName', key: 'shortName', render: (text) => <strong style={{ fontSize: '16px' }}>{text}</strong>, width: 150,
  },
  {
    title: 'Task', dataIndex: 'task', key: 'task',
    render: (task) => {
      let color = 'geekblue';
      if (task && task.includes('Detection')) color = 'volcano';
      else if (task && task.includes('Segmentation')) color = 'green';
      return <Tag color={color}>{task}</Tag>;
    },
  },
  { title: 'Network Architecture', dataIndex: 'architecture', key: 'architecture' },
  { title: 'Target Dataset', dataIndex: 'dataset', key: 'dataset' },
  {
    title: 'Source Code', key: 'codeLink', align: 'center',
    render: (_, record) => (
      record.codeLink ? (
        <Button type="primary" shape="round" icon={<GithubOutlined />} href={record.codeLink} target="_blank">Code</Button>
      ) : <span style={{color: '#999'}}>Coming Soon</span>
    ),
    width: 150,
  },
];
// ========================================================

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, 
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({ show: true });
      }, 500);
    }
  }

  render() {
    const children = [
      // ====== 模块一：保留你的专属 Logo 导航栏 ======
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      
      // ====== 模块二：完美复刻师兄的 100% 科技感全屏背景 ======
      <div key="custom_banner" style={{
        minHeight: '100vh',
        // 这里我直接用了师兄仓库里的背景图，绝对原汁原味！
        backgroundImage: 'url(https://raw.githubusercontent.com/radar-camera-fusion/radar-camera-fusion.github.io/master/static/background.561ff265.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // 网页滚动时背景图不动，非常高级
        backgroundColor: 'rgba(0,0,0,0.3)', // 黑色半透明遮罩，让白色字更清晰
        backgroundBlendMode: 'overlay',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '80px 20px 0', 
        color: '#fff',
      }}>
        <Title style={{ color: '#fff', fontSize: '56px', fontWeight: 'bold', maxWidth: '1000px', margin: '0 auto', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
          Infrared and Visible Image Fusion for Downstream Advanced Vision Tasks in Autonomous Driving: A Review
        </Title>
        
        <Paragraph style={{ color: '#e6e6e6', fontSize: '18px', marginTop: '30px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
          Minyu Lin, Xiaoyu Huang, Xiaohui Zhu<br />
          <span style={{ fontSize: '14px', color: '#ccc' }}>University of Liverpool, Xi'an Jiaotong-Liverpool University</span>
        </Paragraph>

        <Button 
          type="primary" 
          shape="round" 
          size="large" 
          icon={<GithubOutlined />} 
          href="https://github.com/Infrared-Visible-Fusion/Awesome-IVIF-AD" 
          target="_blank"
          style={{ marginTop: '30px', height: '50px', fontSize: '18px', padding: '0 30px', boxShadow: '0 4px 14px rgba(24,144,255,0.4)' }}
        >
          GitHub: Awesome-IVIF-AD
        </Button>
      </div>,

      // ====== 模块三：你的 README 封面图 + 文献检索表格 ======
      <div key="custom_content" style={{ maxWidth: '1200px', margin: '-60px auto 60px', padding: '40px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }}>
        
        {/* 放你那两张封面图的地方 */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Title level={2}>Overview</Title>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <img src="https://raw.githubusercontent.com/Infrared-Visible-Fusion/Awesome-IVIF-AD/main/image/cover.png" alt="cover1" style={{ width: '48%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="https://raw.githubusercontent.com/Infrared-Visible-Fusion/Awesome-IVIF-AD/main/image/cover2.png" alt="cover2" style={{ width: '48%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          </div>
        </div>

        {/* 你的超级表格 */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', marginTop: '60px' }}>Literature Database</Title>
        <div style={{ textAlign: 'center', color: '#999', padding: '50px 0' }}>
          {/* 🚨 注意：等你把 data.json 放到 Home 文件夹后，把下面这行代码的注释 // 删掉就能看到表格了！ */}
          {/* <Table dataSource={paperData} columns={columns} pagination={{ pageSize: 20 }} bordered rowKey="key" /> */}
          (只要放入 data.json 并解开注释，21篇文献的检索表格就会在这里出现！)
        </div>

      </div>
    ];
    const reviewSections = [
      <ReviewNav0
        id="Nav0_1"
        key="Nav0_1"
        dataSource={ReviewNav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_1"
        key="Banner3_1"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Characteristics key="Characteristics_0" isMobile={this.state.isMobile} />,
      <Dataset key="Dataset_0" isMobile={this.state.isMobile} />,
      <Methods key="Methods_0" isMobile={this.state.isMobile} />,
      <Reference key="Reference_0" isMobile={this.state.isMobile} />,
    ];

    return (
      <div className="templates-wrapper" ref={(d) => { this.dom = d; }}>
        {this.state.show && reviewSections}
      </div>
    );
  }
}
