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

export default class SearchHeader extends Component {

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
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        zIndex: 10,
        opacity: 1
    },
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        width: window.width - 60 - 15 * 2,
        margin: 6,
        padding: 10,
        backgroundColor: '#FCEFF0',
        borderRadius: 2,
    },

    searchIcon: {
        width: 25,
        height: 25,
        tintColor: 'gray'
    },


    searchPlaceholder: {
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 14,
        color: 'gray'
    }
})