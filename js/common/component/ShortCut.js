import React, {Component} from 'react'
import {View, StyleSheet, TabBarIOS, Text, Dimensions, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default class ShortCut extends Component {

    render(){
        return (
            <View style= {styles.frame}>

                <TouchableOpacity style={styles.containerStyle}>
                    <View style={[styles.imageContainer,{backgroundColor: '#E71F19'}]}>
                        <Icon name="list" size={25} color="white"/>
                    </View>
                    <Text style={styles.menuFont}>分类</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerStyle}>
                    <View style={[styles.imageContainer, {backgroundColor: '#EC6941'}]}>
                        <Icon name="user-o" size={25} color="white"/>
                    </View>
                    <Text style={styles.menuFont}>个人中心</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerStyle}>
                    <View style={[styles.imageContainer, {backgroundColor: '#448ACA'}]}>
                        <Icon name="database" size={25} color="white"/>
                    </View>
                    <Text style={styles.menuFont}>我的订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerStyle}>
                    <View style={[styles.imageContainer, {backgroundColor: '#F8B551'}]}>
                        <Icon name="shopping-cart" size={25} color="white"/>
                    </View>
                    <Text style={styles.menuFont}>购物车</Text>
                </TouchableOpacity>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    frame: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        backgroundColor: 'white'
    },
    containerStyle: {
        width: Math.round(window.width / 4),
        height: 120,
        padding: 20,
        alignItems: 'center'

    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuFont: {
        marginTop:3,
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold',
    }

})