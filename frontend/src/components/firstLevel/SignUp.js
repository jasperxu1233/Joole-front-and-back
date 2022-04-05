import {Form, Button, Modal, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import Background from "../../629055.jpg";
import {auth, signUp} from "../../actions/action";
import {connect} from "react-redux";


class SignUp extends React.Component {
    state = {
        name : null,
        password : null,
        displayModal: false,
        loading : false,
        isSignUp: true,
        ModalTwo : false,
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

    RemindCancel = () => {
        this.setState({
            ModalTwo : false,
        })
    }

    condition = () => {
        if(this.props.signUpSuccess){
            this.setState(
                {
                    loading : false,
                    displayModal : false
                }
            )

        }else{
            this.setState({
                loading : false,
                displayModal : true,
                ModalTwo : true,
            })
        }
    }


    onFinish = () => {
        this.setState({
            loading : true
        });
        this.props.signUp(this.state.name, this.state.password, this.state.isSignUp);
        setTimeout(this.condition,1000);

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
                    SignUp
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
                            <Input placeholder="Please input your name!"  onChange={event => this.setState({name:event.target.value})}/>
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
                    <Modal
                        title={"Reminding!"}
                        onCancel={this.RemindCancel}
                        onOk={this.RemindCancel}
                        destroyOnClose={true}
                        style={{color:"white"}}
                        visible={this.state.ModalTwo}
                    >
                        <p style={{color:"black", fontSize:20,}}>
                            UserName occupied, please try again!
                        </p>
                    </Modal>
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
        signUpSuccess : state.signUpSuccess,
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