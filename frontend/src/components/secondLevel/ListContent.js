import React from "react";
import {connect} from "react-redux"
import {Button} from "antd";
import {auth, returnToSearch} from "../../actions/action";

class ListContent extends React.Component {

    onReturn = () => {
        this.props.returnToSearch();
    }

    render() {
        return(
            <div>
                <Button
                    onClick={this.onReturn}
                >
                    return
                </Button>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        returnToSearch : () => dispatch(returnToSearch()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListContent)