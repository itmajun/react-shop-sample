import React, {Component} from 'react'
import {FlatList, ScrollView, Text, Dimensions, StyleSheet, View, TouchableOpacity} from "react-native";

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default class LeftCategory extends React.Component {

    render() {
        return (
            <View style= {{flex: 1}}>
            <ScrollView style= {styles.left} showsVerticalScrollIndicator={false}>
                <FlatList style = {styles.leftFlat}
                    data= {[
                        {key: '食品饮料'},
                        {key: '进口食品'},
                        {key: '美容化妆'},
                        {key: '母婴玩具'},
                        {key: '厨房用品'},
                        {key: '钟表箱包'},
                        {key: '营养保健'},
                        {key: '服装鞋靴'}
                    ]}
                    renderItem = {({item})=>
                        <View style= {styles.content}>
                            <TouchableOpacity activeOpacity={0.75}>
                                <Text style= {styles.name}>{item.key}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    left: {
        // width: window.width / 4,
        flexDirection: 'column',
    },
    leftFlat: {
    },
    content: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,

    },
    name: {

    }
})