import {connect} from "react-redux";
import React from "react";
import LogoutTitle from "../secondLevel/LogoutTitle";
import SearchTitle from "../secondLevel/SearchTitle";

class Headers extends React.Component {


    render() {
        return(
            <div>
                {
                this.props.isListing
                     ?
                    <SearchTitle/>
                    :
                <LogoutTitle/>
                 }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        isListing : state.isListing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers);


