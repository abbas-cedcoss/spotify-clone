import React from 'react';
import { HeartOutlined, SearchOutlined, CustomerServiceOutlined, PlayCircleOutlined, MenuOutlined } from '@ant-design/icons';

export function renderNavBar(onClick = () => { }) {
    return [
        {
            key: 0,
            icon: React.createElement(CustomerServiceOutlined),
            label: 'Discover',
            onClick: onClick.bind(this, 'discover')
        },
        {
            key: 1,
            icon: React.createElement(SearchOutlined),
            label: 'Search',
            onClick: onClick.bind(this, 'search')
        },
        {
            key: 2,
            icon: React.createElement(HeartOutlined),
            label: 'Favourites',
            onClick: onClick.bind(this, '/panel/discover')
        },
        {
            key: 3,
            icon: React.createElement(PlayCircleOutlined),
            label: 'Playlists',
            onClick: onClick.bind(this, '/panel/discover')
        },
        {
            key: 4,
            icon: React.createElement(MenuOutlined),
            label: 'Charts',
            onClick: onClick.bind(this, '/panel/discover')
        }
    ]
}