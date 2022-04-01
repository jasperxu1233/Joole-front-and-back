import React from "react";
import {Form, Input} from "antd";
import {connect} from "react-redux";

class searchBar extends React.Component {

    render() {
        return(
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
                    label="search:"
                    name="userName"
                    rules={[
                        { required: true, message: "Please input your name!" },
                    ]}
                    onChange={event => this.setState({name:event.target.value})}
                >
                    <Input placeholder="Please input your name!" onChange={event => this.setState({name:event.target.value})}/>
                </Form.Item>
                {/*<Form.Item*/}
                {/*    label="password:"*/}
                {/*    name="password"*/}
                {/*    rules={[*/}
                {/*        { required: true, message: "Please input your password!" },*/}
                {/*    ]}*/}
                {/*    onChange={event => this.setState({password:event.target.value})}*/}
                {/*>*/}
                {/*    <Input.Password*/}
                {/*        placeholder="Please input your password!"*/}
                {/*        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}*/}
                {/*        onChange={event => this.setState({password:event.target.value})}*/}
                {/*    />*/}
                {/*</Form.Item>*/}
                {/*<Form.Item*/}
                {/*    wrapperCol={{span:15}}*/}
                {/*    style={{*/}
                {/*        textAlign:"right"*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Button*/}
                {/*        type="primary"*/}
                {/*        htmlType="submit"*/}
                {/*        loading = {this.state.loading}*/}
                {/*    >*/}
                {/*        Log In*/}
                {/*    </Button>*/}
                {/*</Form.Item>*/}
            </Form>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        interfaceShowing : state.interfaceShowing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
