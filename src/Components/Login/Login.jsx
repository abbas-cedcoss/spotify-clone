import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AUTH_ENDPOINT, REDIRECT_URI, CLIENT_ID, RESPONSE_TYPE, SCOPE } from '../../environment';

const Login = () => {

    const navigate = useNavigate();
    const [token, setToken] = useState("")

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('code');
        if (isNaN(code)) {
            window.localStorage.setItem('code', code);
        }


        // const hash = window.location.hash
        // let token = window.localStorage.getItem("token")

        // if (!token && hash) {
        //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        //     window.location.hash = ""
        //     window.localStorage.setItem("token", token);
        //     navigate('/panel/home');
        // }
        // else{
        //     console.log('first')
        // }

        // setToken(token);

    }, [])

    return (
        <div className='core-container'>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
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
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >


                    <Button type="primary" block onClick={() => {
                        window.open(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&show_dialog=true`, "_self");
                    }}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;