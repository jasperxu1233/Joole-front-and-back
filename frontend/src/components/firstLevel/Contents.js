import {connect} from "react-redux";
import React from "react";


class Contents extends React.Component {

    render() {
        return (
            <div>
                THIS IS CONTENT!
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

export default connect(mapStateToProps, mapDispatchToProps)(Contents);
