import React, {Component} from 'react'
import {Text, View} from "react-native";
import {connect} from 'react-redux'


/**
 *
 */
class RootContainer extends Component {

    render() {
        return (
            <View>
                <Text>Sample test file</Text>
            </View>
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