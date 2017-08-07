import React,{Component} from 'react'
import {Image, Text, View} from "react-native";

var category = require('../image/tabbar_category_normal.png')
var category_select = require('../image/tabbar_category_selected.png')
export default class CategoryScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '分类',
        tabBarIcon: ({focused,tintColor}) => {
            return <Image
                source={ focused ? category_select: category}
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