import React,{Component} from 'react'
import {Image, Text, View} from "react-native";

export default class CategoryScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '分类',
        tabBarIcon: ({tintColor}) => {
            return <Image
                source={require("../image/nav_shop_normal.png")}
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