import React, {Component} from 'react'
import {Image, View} from "react-native";
import CategoryHeader from '../common/component/CategoryHeader'
import RightCategory from "../common/component/RightCategory";
import LeftCategory from "../common/component/LeftCategory";


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
            <View style= {{flex: 1}}>
                <CategoryHeader/>
                <View style= {{flexDirection: 'row'}}>
                    <LeftCategory/>
                    <RightCategory/>
                </View>
            </View>
            )
    }

}
