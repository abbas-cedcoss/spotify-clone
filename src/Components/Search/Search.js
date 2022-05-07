import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Typography, AutoComplete, Space, Divider } from 'antd';
import { searchsong } from './searchApi'
import { extractRequestFromData } from './searchHelper';
import { notifications } from '../../services/notifications';

function Search() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [renderSelectedSongDetails, setSelectedSong] = useState({});
  const debounceOnChange = useCallback(debounce(onSearch, 400), []);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  }

  function onSearch(searchText) {
    getSong(searchText);
  };

  function onChange(data) {
    setValue(data);
    if (Object.keys(renderSelectedSongDetails).length > 0) {
      setSelectedSong({})
    }
  };

  async function getSong(queryText) {
    let data = await searchsong({ q: queryText, type: 'track' });
    if (window.localStorage.getItem('token') === null || data?.error?.message === 'Invalid access token' || data?.error?.message === 'The access token expired') {
      notifications.error(data.error.message);
      navigate('/panel/login');
      window.localStorage.removeItem('token');
    }
    else prepareData(data);
  }

  function renderOptionItem(item, itemName, element) {
    let { images } = item;
    if (images.length > 0) {
      return (
        <div onClick={() => { getSelectedSongData(images, itemName, element) }}>
          <Space align='center'>
            <img src={images[0]?.url} width='100px' height={'100px'} alt='text' />
            <span>{itemName}</span>
          </Space>
        </div>
      )
    }
  }

  function getSelectedSongData(image = [], itemName = '', element = {}) {
    let temp = {};
    temp['image'] = image?.[0].url;
    temp['name'] = itemName;
    temp['popularity'] = element?.popularity ?? 'N/A';
    temp['duration_ms'] = element?.duration_ms ? element.duration_ms / 60000 : 'N/A';
    temp['listen_on_spotify'] = element?.external_urls?.spotify ?? 'N/A';
    setSelectedSong(temp);
  }

  function renderSelectedeSong() {
    if (Object.keys(renderSelectedSongDetails).length > 0) {
      return <Space align='center' direction='vertical'>
        <img src={renderSelectedSongDetails.image} width='300px' height={'300px'} alt='text' style={{
          boxShadow: '0 0 20px black', borderRadius: '10px', border: '1px solid gray'
        }} />
        <span style={{ color: 'black' }} >{renderSelectedSongDetails.name}</span>
        <Typography.Title level={5} >Details:</Typography.Title>
        <Space direction='vertical' size={20} style={{ lineHeight: '0' }}>
          <Space align='center' direction='horizontal' size={20}>
            <span className='song-details'>Listen on spotify:</span>
            <a style={{ fontSize: '12px' }} href={renderSelectedSongDetails.listen_on_spotify}>Listen now</a>
          </Space>
          <Space align='center' direction='horizontal' size={20}>
            <span className='song-details'>Duration:</span>
            <span className='song-details'>{renderSelectedSongDetails.duration_ms.toFixed(2)}ms</span>
          </Space>
          <Space align='center' direction='horizontal' size={20}>
            <span className='song-details'>Popularity:</span>
            <span className='song-details'>{renderSelectedSongDetails.popularity}</span>
          </Space>
        </Space>
      </Space>
    }
  }

  function prepareData(data) {
    let modifiedSongData = extractRequestFromData(data?.tracks?.items);
    let temp = [];
    modifiedSongData.map((element, index) => {
      temp.push({
        name: element.name.toLowerCase(),
        label: renderOptionItem(element?.album, element?.name, element)
      });
    });
    setOptions(temp);
  }

  return (
    <div className='core-search'>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item>
          <AutoComplete
            options={options}
            style={{
              minWidth: '200px',
            }}
            value={value}
            onSearch={debounceOnChange}
            onChange={(e) => { onChange(e) }}
            placeholder="Enter track name"
          />
        </Form.Item>
      </Form>
      {value !== '' && renderSelectedeSong()}
    </div>
  )
}

export default Search