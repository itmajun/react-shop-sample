import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native'

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default class CategoryHeader extends Component {

    render() {
        return (
            <View style= {styles.header}>
                <TouchableOpacity activeOpacity={0.75}  style={styles.searchInput}>
                    <Image source= {require('./image/icon_search.png')} style={styles.searchIcon}/>
                    <Text style={styles.searchPlaceholder}>搜索商品</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 1,
        backgroundColor: '#F9F9F9',
    },
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        width: window.width - 20,
        margin: 6,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        borderColor: '#D5D5D5',
        borderWidth: 1,
    },

    searchIcon: {
        width: 15,
        height: 15,
        tintColor: 'gray'
    },


    searchPlaceholder: {
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 14,
        color: 'gray'
    }
})