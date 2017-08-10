import {StackNavigator, TabNavigator} from "react-navigation";
import MainScreen from "../container/MainScreen";
import CategoryScreen from "../container/CategoryScreen";
import CartScreen from "../container/CartScreen";
import UserScreen from "../container/UserScreen";
import React from 'react'
import GoodsScreen from "../container/GoodsScreen";

const AppNavigator = TabNavigator({
    MainScreen: {
        screen: MainScreen,
    },
    CategoryScreen: {
        screen: CategoryScreen
    },
    CartScreen: {
        screen: CartScreen
    },
    UserScreen: {
        screen: UserScreen
    }

},{
    title: null,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    lazyLoad: true,
    initialRouteName: 'MainScreen',
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        indicatorStyle: {
            height: 0
        },
        inactiveTintColor: '#CFCFCF',
        activeTintColor: '#CA4C4C',
        style : {
            backgroundColor: '#333333',
            marginBottom:0,
            paddingBottom: 0,
        },
        labelStyle: {
            fontSize: 10,
            margin:0,
        },
        iconStyle: {
            width: 30,
            height: 30,
        },
        tabStyle: {
            // padding: 0,
            // paddingTop: 0
            backgroundColor: '#333333'
        }
    }
})

const AppStack = StackNavigator({
    Root: {
        screen: AppNavigator,
        navigationOptions: {
            header: null,
        }
    },
    GoodsScreen: {
        screen: GoodsScreen
    }
})


export default AppStack