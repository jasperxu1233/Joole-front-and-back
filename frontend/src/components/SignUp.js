import {Form, Button, Modal, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import Background from "../629055.jpg";
import {auth, signUp} from "../actions/action";
import {connect} from "react-redux";


class SignUp extends React.Component {
    state = {
        name : null,
        password : null,
        displayModal: this.props.loading,
        loading : this.props.loading,
        isSignUp: true,
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

    condition = () => {
        if(this.props.error === null && this.props.isAuthenticated && !this.props.load){
            this.setState(
                {
                    loading : this.props.loading,
                    displayModal : this.props.loading
                }
            )
        }
    }


    onFinish = () => {
        this.setState({
            loading : true
        });
        this.props.signUp(this.state.name, this.state.password, this.state.isSignUp);
        this.setState({
            loading : this.props.loading
        })
        setTimeout(this.condition,1500);

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
                            <Input placeholder="name"  onChange={event => this.setState({name:event.target.value})}/>
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
                                onChange={event => this.setState({password:event.target.value})}
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

const mapStateToProps = (state) => {
    return {
        // loading: state.auth.loading,
        // error: state.auth.error,
        // isAuthenticated: state.auth.token !== null,
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null,
        name : state.name !== null,
        // authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: ( name, password, isSignup ) => dispatch( signUp( name, password, isSignup ) ),
        // onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// export default SignUp;