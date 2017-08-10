import React, {Component} from 'react'
import {Text, View} from "react-native";
import {connect} from 'react-redux'
import AppStack from "../common/AppNavigator";


/**
 *
 */
class RootContainer extends Component {

    render() {
        return (
           <AppStack/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)