import {Form, Button, Modal, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import Background from "../629055.jpg";


class SignUp extends React.Component {
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

    render = () => {
        return (
            <>
                <Button shape="round" type="primary" onClick={this.signupOnClick}
                        style={{
                            // backgroundImage: `url(${Background})`,
                            backgroundColor : "inherit",
                            borderWidth:0,
                            color:"black",
                        }}>
                    SingUp
                </Button>
                <Modal
                    title="Register"
                    visible={this.state.displayModal}
                    onCancel={this.handleCancel}
                    footer={null}
                    destroyOnClose={true}
                    style={{color:"white"}}
                >
                    <Form
                        name="normal_register"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        preserve={false}
                    >
                        <Form.Item
                            name="userName"
                            rules={[
                                { required: true, message: "Please input your name!" },
                            ]}
                        >
                            <Input placeholder="name" />
                        </Form.Item>
                        <Form.Item
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
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading = {this.state.loading}
                            >
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    };
}


export default SignUp;