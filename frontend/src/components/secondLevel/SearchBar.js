import React from "react";
import {Form, Input} from "antd";
import {connect} from "react-redux";
import {auth, fetchProject} from "../../actions/action";

class SearchBar extends React.Component {

    render() {
        return(
            <div>
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
            </div>

        )
    }
}
//select, table, collapse + slider
//点击某个按键，fetch project，然后显示在button上，然后选中button（select？待查询），输入manufacture，点击放大镜查询，搜索该project下，对应的
//该manufacture的product（可以先拿到所有的product，然后是在某个manufacture下的然后显示出来？还是后端需要再写个api？待思考（可以在后端加一个controller，做拿到productList之后的manufacture的筛查再返回productList））
// 并且isListing为true，进入另外一个显示界面，随后searchbar到title去，下面就是将所有的product显示出来就行（table或者form，看选择？待查询）
//list界面左边，要显示html，可以不连接。。。（待查询）
//最后最好在listing界面有个return按钮，可以将isListing变为false，然后回到之后的searchContent界面。
//点击放大镜查询之后再改变isListing的值为true
const mapStateToProps = (state) => {
    return{
        projectList : state.projectList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProject: () => dispatch( fetchProject() ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
