import {Row, Col, Layout, Form, Input, Button} from "antd";
import {Content} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import SignUp from "./SignUp";
// import Background from "../629055.jpg";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import React from "react";
// import banner from "../banner.jpg"
import banner from "../background1.jpg"

class Login extends React.Component {

    state = {
        displayModal: false,
        loading : false
    };



    handleCancel = () => {
        this.setState({
            displayModal: false,
        });
    };

    signupOnClick = () => {
        this.setState({
            displayModal: true,
        });
    };

    onFinish = (data) => {
        this.setState({
            loading : true
        });
        // signup(data)
        //     .then(() => {
        //         this.setState({
        //             displayModal: false,
        //         });
        //         message.success(`Successfully signed up`);
        //     })
        //     .catch((err) => {
        //         message.error(err.message);
        //     })
        //     .finally(() => {
        //         this.setState({
        //             loading : false
        //         })
        //     })
        // ;
    };

    render() {
        return (
            <div>
                <div class="mask"
                    style={{
                        textAlign:"center",
                        padding:30,
                    }}
                >
                    <div class="content"
                        style={{
                            display: "inline-block",
                            // margin:0,
                            backgroundImage: `url(${banner})`,
                            width:410,
                            height:140,
                        }}
                    >
                    </div>
                </div>
                <div style={{fontSize : 30, textAlign:"center", color : "gray"}}>
                    Building Product Selection Platform
                </div>
                <div
                    style={{
                        width:1650,
                    }}

                >
                    <Form
                        style={{textAlign:"center"}}
                        name="normal_register"
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 20 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        preserve={false}
                    >
                        <Form.Item
                            label="username:"
                            name="userName"
                            rules={[
                                { required: true, message: "Please input your name!" },
                            ]}
                        >
                            <Input placeholder="name" />
                        </Form.Item>
                        <Form.Item
                            label="password:"
                            name="password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                            ]}
                        >
                            <Input.Password
                                placeholder="Please input your password!"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={1}
                            style={{
                                textAlign:"right"
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading = {this.state.loading}
                            >
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;