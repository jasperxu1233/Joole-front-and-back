import React from "react";
import {connect} from "react-redux";
import {Button, Form, Input, Modal} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";



class SearchTitle extends React.Component {

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
                    Project
                </Button>
                <Modal
                    title="Register"
                    visible={this.state.displayModal}
                    onCancel={this.handleCancel}
                    footer={null}
                    destroyOnClose={true}
                    style={{color:"white"}}
                >

                </Modal>
            </>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTitle);
