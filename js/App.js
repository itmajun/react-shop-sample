import React, {Component} from 'react'
import {configureStore} from "./redux/configureStore";
import RootContainer from "./container/RootContainer";
import {Provider} from "react-redux";

export default class App extends Component {

    constructor() {
       super()
        this.state = {
           isLoading: true,
            store: configureStore(()=> this.setState({isLoading: false}))
        }
    }

    render () {
        return (
            <Provider store= {this.state.store}>
                <RootContainer/>
            </Provider>
        )
    }
}