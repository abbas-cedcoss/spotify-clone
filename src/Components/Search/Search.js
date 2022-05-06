import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { searchsong } from './searchApi'

function Search() {
  const navigate = useNavigate();

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
  }, [])

  return (
    <div className=' '>
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
          <Input />
        </Form.Item>

        <Form.Item 
        >
          <Button type="primary" block onClick={() => {
          }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Search