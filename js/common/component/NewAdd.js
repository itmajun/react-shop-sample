import React, {Component} from 'react'
import {Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native'
import {StackNavigator} from "react-navigation";
import GoodsScreen from "../../container/GoodsScreen";
import MainScreen from "../../container/MainScreen";

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default class NewAdd extends Component {

    componentDidMount (){
        console.log("-------------------")
        console.log(this.props)
    }


    render () {

        return (
            <View style= {styles.container}>
                <Text style= {styles.newAdd}>最新上架</Text>
                <View style= {styles.row}>
                    <TouchableOpacity style= {styles.item} activeOpacity={0.75} onPress= {()=> this.props.navigation.navigate('GoodsScreen', {name: 'Lucy'})}>
                        <Image source= {{uri: 'https://img.alicdn.com/imgextra/i3/880734502/TB2MztxrbRkpuFjSspmXXc.9XXa_!!880734502.jpg'}} style= {styles.cover}/>
                        <Text style= {styles.title}>聚【三只松鼠_坚果大礼包1423g】零食干果每日坚果礼盒8袋 F套餐</Text>
                        <View style= {styles.line}></View>
                        <Text style= {styles.price}>¥ 119.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.item}>
                        <Image source= {{uri: 'https://img.alicdn.com/imgextra/i2/880734502/TB2XQJFXeLyQeBjy1XaXXcexFXa_!!880734502.jpg'}} style= {styles.cover}/>
                        <Text style= {styles.title}>聚【三只松鼠_手剥巴旦木235gx2袋】聚【三只松鼠_手剥巴旦木235gx2袋】聚【三只松鼠_手剥巴旦木235gx2袋】</Text>
                        <View style= {styles.line}></View>
                        <Text style= {styles.price}>¥ 36.90</Text>
                    </TouchableOpacity>

                </View>
                <View style= {styles.row}>
                    <TouchableOpacity style= {styles.item}>
                        <Image source= {{uri: 'https://img.alicdn.com/imgextra/i3/880734502/TB2MztxrbRkpuFjSspmXXc.9XXa_!!880734502.jpg'}} style= {styles.cover}/>
                        <Text style= {styles.title}>聚【三只松鼠_坚果大礼包1423g】零食干果每日坚果礼盒8袋 F套餐</Text>
                        <View style= {styles.line}></View>
                        <Text style= {styles.price}>¥ 119.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.item}>
                        <Image source= {{uri: 'https://img.alicdn.com/imgextra/i2/880734502/TB2XQJFXeLyQeBjy1XaXXcexFXa_!!880734502.jpg'}} style= {styles.cover}/>
                        <Text style= {styles.title}>聚【三只松鼠_手剥巴旦木235gx2袋】聚【三只松鼠_手剥巴旦木235gx2袋】聚【三只松鼠_手剥巴旦木235gx2袋】</Text>
                        <View style= {styles.line}></View>
                        <Text style= {styles.price}>¥ 36.90</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'column',
    },
    newAdd: {
        fontSize: 16,
        color: 'grey',
        marginTop: 5,
        marginLeft: 10
    },
    row: {
        flex: 1,
        padding: 10,
        flexDirection: 'row'
    },
    item: {
        width: window.width / 2,
        flexDirection: 'column'
    },
    cover: {
        width: window.width /2 - 15,
        height: 150
    },
    line: {
        height: 2,
        width: window.width /2 - 15,
        backgroundColor:'#F3F3F3'
    },
    price: {
        fontSize: 18,
        color: '#F58383',
        fontWeight: '500'
    },
    title: {
        fontSize: 14,
        height: 50,
        marginBottom: 5,
        paddingRight: 5
    }

})