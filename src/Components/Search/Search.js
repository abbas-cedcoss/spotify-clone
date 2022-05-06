import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, AutoComplete } from 'antd';
import { searchsong } from './searchApi'
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
function Search() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  async function getSong() {
    let data = await searchsong({ q: 'hate', type: 'track' });
    if (data.hasOwnProperty('error')) {
      navigate('/panel/login');
      window.localStorage.removeItem('token');
    }
    else prepareData(data);
  }

  function prepareData(data) {
    console.log(data);
  }

  useEffect(() => {
    getSong()
    // console.log('mounted')
  }, []);

  return (
    <div className='core-search'>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <AutoComplete
            options={options}
            style={{
              width: 200,
            }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="input here"
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Search