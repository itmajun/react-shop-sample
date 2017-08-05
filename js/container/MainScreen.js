import React,{Component} from 'react'
import {Image, Text, View, StyleSheet} from "react-native";
var shop = require('./image/nav_shop_normal.png')

export default class MainScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '商城',
        tabBarIcon: ({tintColor}) => {
           return <Image source={shop} style={[styles.icon, {tintColor: tintColor}]}
            />
        }
    }

    componentDidMount () {
        console.log("----------")
        console.log(shop)
    }

    render() {
        return (
            <View>
                <Text>this is main Screen</Text>
                <Image source={shop} style= {{width:30, height: 30}}/>
            </View>
            )
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
});