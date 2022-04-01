import {Row, Col, Layout, Form, Input, Button, Modal} from "antd";
import {Content} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
// import Background from "../629055.jpg";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import React from "react";
// import banner from "../banner.jpg"
import banner from "../../background1.jpg"
import axios from "axios";
import {auth, authFail, authStart, authSuccess, checkAuthTimeout} from "../../actions/action";
import {connect} from "react-redux";

class Login extends React.Component {

    state = {
        loading : false,
        name : null,
        password : null,
        isSignUp : true,
        displayModal : false
    };

    // auth = (email, password, isSignup) => {
    //     return dispatch => {
    //         dispatch(authStart());
    //         const authData = {
    //             email: email,
    //             password: password,
    //             returnSecureToken: true
    //         };
    //         let url = 'localhost:8080/joole/users/login';
    //         if (!isSignup) {
    //             url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
    //         }
    //         axios.post(url, authData)
    //             .then(response => {
    //                 console.log(response);
    //                 const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    //                 localStorage.setItem('token', response.data.idToken);
    //                 localStorage.setItem('expirationDate', expirationDate);
    //                 localStorage.setItem('userId', response.data.localId);
    //                 dispatch(authSuccess(response.data.idToken, response.data.localId));
    //                 dispatch(checkAuthTimeout(response.data.expiresIn));
    //             })
    //             .catch(err => {
    //                 dispatch(authFail(err.response.data.error));
    //             });
    //     };
    // };

    condition = () => {
        if(this.props.error === null && this.props.isAuthenticated && !this.props.loading){
            this.setState(
                {
                    loading : false
                }
            )
            console.log("success!")
            // this.props.Onsuccess();
        }else{
            this.setState({
                loading : false,
                displayModal : true,
            })
        }
    }

    RemindCancel = () => {
        this.setState({
            displayModal : false,
        })
    }

    onFinish = () => {
        console.log(this.state.name)
        this.props.onAuth(this.state.name, this.state.password, this.state.isSignUp);
        this.setState({
            loading : true
        });
        setTimeout(this.condition,1000);
        // return dispatch => {
        //     console.log("123123123");
        //     dispatch(authStart());
        //     const authData = {
        //         name: data.name,
        //         password: data.password,
        //     };
        //     let url = 'localhost:8080/joole/users/login';
        //     if (!this.state.isSignUp) {
        //         url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
        //     }
        //     axios.post(url, JSON.stringify(authData))
        //         .then(response => {  // successfully login
        //             console.log(response);
        //             this.props.Onsuccess();
        //
        //             const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        //             localStorage.setItem('token', response.data.idToken);
        //             localStorage.setItem('expirationDate', expirationDate);
        //             localStorage.setItem('userId', data.name);
        //             dispatch(authSuccess(response.data.idToken, data.name));
        //             dispatch(checkAuthTimeout(response.data.expiresIn));
        //         })
        //         .catch(err => {
        //             dispatch(authFail(err.response.data.error));
        //         })
        //         .finally(() => {
        //             this.setState({
        //                 loading : false
        //             })
        //         });
        // };

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
        //     });
    };

    render() {
        return (
            <div>
                <div
                    style={{
                        textAlign:"center",
                        padding:30,
                    }}
                >
                    <div
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
                <Modal
                    title={"Reminding!"}
                    onCancel={this.RemindCancel}
                    onOk={this.RemindCancel}
                    destroyOnClose={true}
                    style={{color:"white"}}
                    visible={this.state.displayModal}
                >
                    <p
                        style={{color:"black", fontSize:20}}
                    >
                        Incorrect name or password, please try again!
                    </p>
                </Modal>
                <div
                    style={{
                        // width:1650,
                    }}

                >
                    <Form
                        style={{textAlign:"center"}}
                        name="normal_register"
                        labelCol={{ span: 9 }}
                        wrapperCol={{ span: 6 }}
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
                            onChange={event => this.setState({name:event.target.value})}
                        >
                            <Input placeholder="Please input your name!" onChange={event => this.setState({name:event.target.value})}/>
                        </Form.Item>
                        <Form.Item
                            label="password:"
                            name="password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                            ]}
                            onChange={event => this.setState({password:event.target.value})}
                        >
                            <Input.Password
                                placeholder="Please input your password!"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                onChange={event => this.setState({password:event.target.value})}
                            />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{span:15}}
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

const mapStateToProps = (state) => {
    return {
        // loading: state.auth.loading,
        // error: state.auth.error,
        // isAuthenticated: state.auth.token !== null,
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null,
        // authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: ( name, password, isSignup ) => dispatch( auth( name, password, isSignup ) ),
        // onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);