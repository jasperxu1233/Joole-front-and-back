import {connect} from "react-redux";
import React from "react";
import ListContent from "../secondLevel/ListContent";
import SearchContent from "../secondLevel/SearchContent";


class Contents extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.isListing
                    ?
                        <ListContent/>
                        :
                        <SearchContent/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contents);
