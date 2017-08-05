import React, {Component} from 'react'
import {Text, View} from "react-native";
import {connect} from 'react-redux'
import AppNavigator from "../common/AppNavigator";


/**
 *
 */
class RootContainer extends Component {

    render() {
        return (
           <AppNavigator/>
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