import React, { useEffect } from 'react';
import { Divider, Layout, Menu, Typography, Avatar } from 'antd';
import { renderNavBar } from './homehelper';
import getnewreleases from './homeApi';
import { notifications } from '../../services/notifications';
import Releasedthisweek from './releasedthisweek/Releasedthisweek';
import Featureplaylists from './featuredplaylists/Featureplaylists';
import Browsegeneres from './browsegeneres/Browsegeneres';
import header from '../../../src/assets/images/header.jpg';
import { UserOutlined } from '@ant-design/icons';
import SpotifyPlayer from 'react-spotify-web-playback';


const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

function Home() {

  function onNavBarChange(route = '') {
    console.log(route)
  }

  function playAudio() {

  }

  return <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <Menu
        className='custom-menu'
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['0']}
        items={renderNavBar(onNavBarChange)}
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background header-on-home" style={{ padding: '5rem', backgroundImage: `url(${header})` }} >
      </Header>
      <Content style={{ margin: '0px 10px 0' }}>
        <div className="site-layout-background" style={{ minHeight: 360, }}>
          <SpotifyPlayer
            token={playAudio()}
            uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
          />;
          <Divider orientation='left' plain orientationMargin={0}><Text type='secondary'>Released this week</Text></Divider>
          <Releasedthisweek />
          <Divider orientation='left' plain orientationMargin={0}><Text type='secondary'>Featured Playlists</Text></Divider>
          <Featureplaylists />
          <Divider orientation='left' plain orientationMargin={0}><Text type='secondary'>Browse</Text></Divider>
          <Browsegeneres />
        </div>
      </Content>
    </Layout>
  </Layout>
}

export default Home;