import React from 'react';
import { Layout, Space } from 'antd';
import { ProfileContent } from './ProfileContent';
import { ProfileSider } from './ProfileSider';
import { ProfileFooter } from './ProfileFooter';
import { ProfileHeader } from './ProfileHeader';
import { useState } from 'react';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '	#D3D3D3',
};

const siderStyle = {
  
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {  
  color: '#fff',
  backgroundColor: '#D3D3D3',
};
export const UserDashboard = ({setisloggedIn}) => {
  const[currentuserItem , setCurrentUserItem]= useState(1);
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      
      <Layout>
        <Header style={headerStyle}><ProfileHeader/></Header>
        <Layout hasSider>
          <Sider style={siderStyle}><ProfileSider setCurrentUserItem={setCurrentUserItem}/></Sider>
          <Content ><ProfileContent currentuserItem={currentuserItem} setCurrentUserItem={setCurrentUserItem} setisloggedIn = {setisloggedIn}/></Content>
        </Layout>
        <Footer style={footerStyle}><ProfileFooter/></Footer>
      </Layout>
     
      
    </Space>
  )
}

  