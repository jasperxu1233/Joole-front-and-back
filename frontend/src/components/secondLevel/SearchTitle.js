import React from "react";
import {connect} from "react-redux";
import {Button, Form, Input, Modal, Select} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import SearchBar from "./SearchBar";
import LogoutTitle from "./LogoutTitle";
import Search from "antd/es/input/Search";
import {fetchProduct, fetchProject, logout} from "../../actions/action";

const {Option} = Select;

class SearchTitle extends React.Component {

    state = {
        projectId : null,
        manufacturerName : null,
        displayModal : false
    }

    handleChange = (value) => {
        // console.log(value);
        this.setState({
            projectId : value,
        })
    }

    onSearch = (value) => {
        // console.log(value);
        this.setState({
            manufacturerName : value,
        })
        this.props.fetchProduct(this.state.projectId, this.state.manufacturerName);
    }

    onshow = () => {
        this.setState({
            displayModal : true,
        })
    }

    handleCancel = () => {
        this.setState({
            displayModal : false,
        })
    }

    onLogout = () => {
        this.props.logout();
    }

    render = () => {
        return (
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <Select defaultValue=""
                        style={{
                            float:"center",
                            display: "inline-block",
                            width: 120,
                            margin:-16,
                        }}
                        onChange={this.handleChange}>
                    {
                        this.props.projectList.map((item) => {
                                return <Option value = {item.id} key = {item.projectName}>
                                    {item.projectName}
                                </Option>
                            }
                        )
                    }
                </Select>
                <Search placeholder= "Please input manufacture name"
                        onSearch={this.onSearch}
                        style={{
                            float:"center",
                            display: "inline-block",
                            width:300,
                            margin : 16,
                        }}
                />
                <Button shape="round" type="primary" onClick={this.onshow}
                        style={{
                            // backgroundImage: `url(${Background})`,
                            backgroundColor : "inherit",
                            borderWidth:0,
                            color:"black",
                            display : "inline-block",
                            float : "right",
                            margin  :16,
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


                {/*<SearchBar/>*/}
                {/*<LogoutTitle/>*/}
            </div>
        );
    };

}





const mapStateToProps = (state) => {
    return{
        interfaceShowing : state.interfaceShowing,
        projectList : state.projectList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProject: () => dispatch( fetchProject() ),
        fetchProduct: (projectId, manufacturerName) => dispatch(fetchProduct(projectId, manufacturerName) ),
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTitle);
