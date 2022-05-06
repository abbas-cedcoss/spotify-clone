import React, { useEffect, useState } from 'react';
import { Divider, Layout, Menu, Typography, Avatar, Affix } from 'antd';
import Releasedthisweek from '../../Components/Home/releasedthisweek/Releasedthisweek';
import Featureplaylists from '../../Components/Home/featuredplaylists/Featureplaylists';
import Browsegeneres from '../../Components/Home/browsegeneres/Browsegeneres';
import SpotifyPlayer from 'react-spotify-web-playback';
const { Text } = Typography;

function Discover() {

    const [audio, setAudio] = useState('');

    function playAudio(data = []) {
        if (data.length > 0)
            setAudio(data?.[0]?.['uri']);
    }

    function validateAccessToken() {
        if (window.localStorage.getItem('token') != null)
            return window.localStorage.getItem('token');
    }
    return (
        <div>
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
    )
}

export default Discover