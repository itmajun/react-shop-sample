import React,{Component} from 'react'
import {Image, Text, View} from "react-native"
var cart = require('../image/tabbar_cart_normal.png')
var cart_select = require('../image/tabbar_cart_selected.png')

export default class CartScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '购物车',
        tabBarIcon: ({ focused, tintColor}) => {
            return <Image source={ focused ? cart_select: cart}
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