import React,{Component} from 'react'
import {Image, Text, View} from "react-native";

export default class CartScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '购物车',
        tabBarIcon: ({tintColor}) => {
            return <Image source={require("../image/nav_shop_normal.png")}
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