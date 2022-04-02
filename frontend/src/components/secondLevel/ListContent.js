import React from "react";
import {connect} from "react-redux"

class ListContent extends React.Component {


    render() {
        return(
            <div>
                <table>
                    nihao

                </table>
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


export default connect(mapStateToProps, mapDispatchToProps)(ListContent)