import React from 'react';
import { Layout, Menu } from 'antd';
import { renderNavBar } from './homehelper';

const { Header, Content, Footer, Sider } = Layout;

function Home() {

  function onNavBarChange(route = '') {
    console.log(route)
  }
  return <Layout>
    <Sider
      breakpoint={{
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
      }}
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        className='custom-menu'
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['0']}
        items={renderNavBar(onNavBarChange)}
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: '5rem' }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: '1%', minHeight: 360 }}>
          content
        </div>
      </Content>
    </Layout>
  </Layout>
}

export default Home;