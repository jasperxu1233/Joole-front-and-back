import React from "react";
import {connect} from "react-redux";
import {Button, Form, Input, Modal} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {auth, logout} from "../../actions/action";



class LogoutTitle extends React.Component {

    state = {
        displayModal : false
    }

    handleCancel = () => {
        this.setState({
            displayModal : false
        })
    }

    onshow = () => {
        this.setState({
            displayModal : true
        })
    }

    onLogout = () => {
        this.props.logout();
    }

    render = () => {
        return (
            <div>
                <Button shape="round" type="primary" onClick={this.onshow}
                        style={{
                            // backgroundImage: `url(${Background})`,
                            backgroundColor : "inherit",
                            borderWidth:0,
                            color:"black",
                        }}>
                    Logout
                </Button>
                <Modal
                    title="Register"
                    visible={this.state.displayModal}
                    onCancel={this.handleCancel}
                    onOk={this.onLogout}
                    destroyOnClose={true}
                    style={{color:"white"}}
                >
                    <p
                        style={{
                            color:"black",
                            fontSize:20,
                    }}>
                        Are you sure to logout?
                    </p>
                </Modal>
            </div>
        );
    };
}





const mapStateToProps = (state) => {
    return{
        interfaceShowing : state.interfaceShowing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutTitle);
