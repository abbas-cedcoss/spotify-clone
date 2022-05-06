import React, { useState } from 'react';
import { Layout, Menu, Typography, Avatar, } from 'antd';
import { renderNavBar } from './homehelper';
import header from '../../../src/assets/images/header.jpg';
import { UserOutlined } from '@ant-design/icons';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Search from '../Search/Search';
import Discover from '../Discover/Discover';
import user from '../../assets/images/user.png'

const { Header, Content, Sider } = Layout;

function Home(props) {

  const navigate = useNavigate();
  function onNavBarChange(route = '') {
    navigate(route)
  }
  return <Layout style={{ borderRadius: '50px' }}>
    <Sider id='slider'
    // breakpoint="lg"
    // collapsedWidth="20px"
    // onBreakpoint={broken => {
    //   console.log(broken);
    // }}
    // onCollapse={(collapsed, type) => {
    //   return true;
    //   // console.log(collapsed, type);
    // }}
    // collapsible={false}
    >
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px" y="0px"
          width="48" height="48"
          viewBox="0 0 172 172"
        ><path d="M0,172v-172h172v172z" fill="none"></path><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></svg>
      </div>
      <Menu
        className='custom-menu'
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['0']}
        items={renderNavBar(onNavBarChange)}
        style={{
          backgroundColor: 'rgba(87,79,216,255)',
          height: '100vh',
          // position: 'absolute',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        }}
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background header-on-home" style={{ padding: '5rem', backgroundImage: `url(${header})` }} >
      </Header>
      <Content style={{ margin: '0px 10px 0' }}>
        <Routes>
          <Route path="*" element={<Navigate to="discover" replace />} />
          <Route path='discover' element={<Discover />} />
          <Route path='search' element={<Search />} />
        </Routes>
      </Content>
    </Layout>
  </Layout>
}

export default Home;