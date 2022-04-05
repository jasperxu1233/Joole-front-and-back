import logo from './logo.svg';
import './App.css';
import Login from "./components/firstLevel/Login";
import {Button, Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import SignUp from "./components/firstLevel/SignUp";
import Background from "./629055.jpg";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import React from "react";
import Headers from "./components/firstLevel/Headers";
import Contents from "./components/firstLevel/Contents";
import {returnToSearch} from "./actions/action";


class App extends React.Component{

    // const [authed, setAuthed] = useState(true);
    //
    // return(
    //     <Layout
    //         style={{
    //             backgroundColor : "inherit"
    //             // backgroundImage: `url(${Background})`,
    //         }}
    //     >
    //         <Header className="header"
    //                 style={{ justifyContent: "space-between",
    //                     // backgroundImage: `url(${Background})`,
    //                     backgroundColor : "inherit",
    //                     textAlign:"right"}}>
    //             <div>
    //                 {
    //                     authed ?
    //                         <SignUp/>
    //                         :
    //                         <Headers/>
    //                 }
    //             </div>
    //         </Header>
    //         <Content
    //             style={{
    //                 padding: "50px",
    //                 maxHeight: "calc(100% - 64px)",    // 页面的最大值，减去head的高度（header高度为64px）
    //                 overflowY: "auto",
    //                 // backgroundColor : "inherit"
    //                 // backgroundImage: `url(${Background})`,
    //             }}
    //         >
    //             {
    //                 authed
    //                     ?
    //                     <Login
    //                         Onsuccess = {() => setAuthed(false)}
    //                     />
    //                     :
    //                     <Contents/>
    //             }
    //         </Content>
    //     </Layout>
    // )

    // state = {
    //     refresh : true,
    // }
    //
    // onRefresh = () => {
    //     this.setState({
    //         refresh : false,
    //     })
    // }

    // state = {
    //     loading : this.props.interfaceShowing,
    // }

    onReturn = () => {
        this.props.returnToSearch();
    }

    render() {
        return (
            <Layout
                style={{
                    backgroundColor : "inherit"
                    // backgroundImage: `url(${Background})`,
                }}
            >
                <Header className="header"
                        style={{ justifyContent: "space-between",
                            // backgroundImage: `url(${Background})`,
                            backgroundColor : "inherit",
                            textAlign:"right"}}>
                        {
                            // this.state.refresh
                            this.props.interfaceShowing
                            // this.state.loading
                                ?
                                <Headers/>
                                :
                            <SignUp/>
                        }
                </Header>
                <Content
                    style={{
                        padding: "50px",
                        maxHeight: "calc(100% - 64px)",    // 页面的最大值，减去head的高度（header高度为64px）
                        overflowY: "auto",
                        // backgroundColor : "inherit"
                        // backgroundImage: `url(${Background})`,
                    }}
                >
                    {
                    // this.state.refresh
                        this.props.interfaceShowing
                        // this.state.loading
                        ?
                            // Onsuccess = {this.onRefresh}
                            <Contents/>
                            :
                            <Login/>
                    }
                </Content>
                <footer>
                    {
                        this.props.isListing ?
                        <div style={{
                            display : "block",
                        }}>
                            <Button
                                onClick={this.onReturn}
                                style={{
                                    display:"inline-block",
                                    float : "right",
                                    margin : 50,
                                }}
                            >
                                return
                            </Button>
                        </div> :
                            <div>
                            </div>
                    }
                </footer>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        interfaceShowing : state.interfaceShowing,
        isListing : state.isListing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        returnToSearch : () => dispatch(returnToSearch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
