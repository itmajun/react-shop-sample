import React,{Component} from 'react'
import {Image, Text, View} from "react-native";

export default class UserScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused,tintColor}) => {
           return  <Image
                source={focused ? require("../image/nav_shop_selected.png"): require("../image/nav_shop_normal.png")}
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