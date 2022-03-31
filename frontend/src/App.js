import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import SignUp from "./components/SignUp";
import Background from "./629055.jpg";
import {useEffect, useState} from "react";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";


function App() {

    const [authed, setAuthed] = useState(false);

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
              <SignUp/>
          </Header>
          <Content
              style={{
                  padding: "50px",
                  maxHeight: "calc(100% - 64px)",    // 页面的最大值，减去head的高度（header高度为64px）
                  overflowY: "auto",
                  // backgroundColor : "inherit"
                  // backgroundImage: `url(${Background})`,
              }}
          >{
              authed ?
                  <div>
                      nihao
                  </div>:
                  <Login Onsuccess = { () => setAuthed(true)}/>
          }
          </Content>
      </Layout>
  );
}

export default App;

// const mapStateToProps = (state) => {
//     return
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
