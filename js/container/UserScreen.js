import React,{Component} from 'react'
import {Image, Text, View} from "react-native";
var my = require('../image/tabbar_my_normal.png')
var my_select = require('../image/tabbar_my_selected.png')


export default class UserScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused,tintColor}) => {
           return  <Image
                source={focused ? my_select: my}
                style={[{width: 30, height: 30},{tintColor: tintColor}]}
            />
        }
    }

    render() {
        return (
            <View>
                <Text>this is main Screen</Text>
            </View>
            )
    }

}