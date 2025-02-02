import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined, PhoneOutlined, ToolOutlined, WifiOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'خانه',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'دوره ها',
    key: 'courses',
    icon: <AppstoreOutlined />,
  },
  {
    label:'اخبار',
    key: 'news',
    icon: <WifiOutlined />,
  },
  {
    label: 'خدمات',
    key: 'services',
    icon: <ToolOutlined />,
  },
  {
    label:'تماس با ما',
    key: 'contactUs',
    icon: <PhoneOutlined />,
  }
];
const AntdTopMenu = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu className='font-irSans' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default AntdTopMenu;