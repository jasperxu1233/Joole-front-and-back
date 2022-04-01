import banner from "../../background1.jpg";
import {Button, Form, Input, Modal} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import React from "react";
import {connect} from "react-redux";
import searchBar from "./searchBar";

class SearchContent extends React.Component {


    render() {
        return(
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
                {
                    <searchBar/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContent)