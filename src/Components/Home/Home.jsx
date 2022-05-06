import React, { useEffect, useState } from 'react';
import { Divider, Layout, Menu, Typography, Avatar, Affix } from 'antd';
import { renderNavBar } from './homehelper';
import Releasedthisweek from './releasedthisweek/Releasedthisweek';
import Featureplaylists from './featuredplaylists/Featureplaylists';
import Browsegeneres from './browsegeneres/Browsegeneres';
import header from '../../../src/assets/images/header.jpg';
import { UserOutlined } from '@ant-design/icons';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

function Home() {

  const [audio, setAudio] = useState('');
  const navigate = useNavigate();

  function onNavBarChange(route = '') {
    navigate(route)
  }

  function playAudio(data = []) {
    if (data.length > 0)
      setAudio(data?.[0]?.['uri']);
  }

  function validateAccessToken() {
    if (window.localStorage.getItem('token') != null)
      return window.localStorage.getItem('token');
  }

  return <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
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
          <Divider orientation='left' plain orientationMargin={0}><Text type='secondary'>Released this week</Text></Divider>
          <Releasedthisweek playAudio={playAudio} />
          <Divider orientation='left' plain orientationMargin={0}><Text type='secondary'>Featured Playlists</Text></Divider>
          <Featureplaylists />
          <Divider orientation='left' plain orientationMargin={0}><Text type='secondary'>Browse</Text></Divider>
          <Browsegeneres />
          <Affix offsetBottom={10}>
            <SpotifyPlayer
              token={validateAccessToken()}
              uris={audio}
            />
          </Affix>
        </div>
      </Content>
    </Layout>
  </Layout>
}

export default Home;