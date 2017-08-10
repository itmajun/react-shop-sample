import React, {Component} from 'react'
import {Image, SectionList, Text, TouchableOpacity, View, StyleSheet, ScrollView ,Dimensions} from "react-native";


let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}


export default class RightCategory extends Component {

    render() {
        return (
            <View style= {{flex: 3}}>
            <ScrollView style= {styles.right} showsVerticalScrollIndicator={false}>
                <SectionList
                    sections={[
                        {title: '进口乳制品', data: [
                            {
                                key: '1',
                                data: [
                                    { name: '进口牛奶', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                                    {name: '进口饮料', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '进口饼干', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '井口糕点', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'}]
                            }
                        ]},
                        {title: '进口乳制品', data: [
                            {
                                key: '1',
                                data: [
                                    { name: '进口牛奶', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                                    {name: '进口饮料', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '进口饼干', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '井口糕点', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'}]
                            }
                        ]},
                        {title: '进口乳制品', data: [
                            {
                                key: '1',
                                data: [
                                    { name: '进口牛奶', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                                    {name: '进口饮料', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '进口饼干', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '井口糕点', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'}]
                            }
                        ]}
                        ,
                        {title: '进口乳制品', data: [
                            {
                                key: '1',
                                data: [
                                    { name: '进口牛奶', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                                    {name: '进口饮料', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '进口饼干', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                    {name: '井口糕点', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'}]
                            }
                        ]}
                    ]}

                    renderItem = {({item})=>

                        <View style= {styles.content}>

                            {
                                item.data.map((item,i) => {
                                    return (
                                        <TouchableOpacity key= {i} activeOpacity={0.75} style= {styles.item}>
                                            <Image source= {{uri: item.pic}} style= {styles.img}/>
                                            <Text style= {styles.name}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    }
                    renderSectionHeader={({section}) => <View style= {{flex: 1, height: 25, marginTop: 10}} ><Text style={styles.sectionHeader}>{section.title}</Text></View>}
                />
            </ScrollView>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    right: {
        // width: Math.round((window.width / 4) * 3),

    },
    content: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
    },
    img: {
        width: 50,
        height: 50,
    },
    name: {

    },
    sectionHeader: {
        marginLeft: 10,
        padding: 6.5,
        fontSize: 12,
        color: '#787878',
        borderBottomWidth: 4,
        borderBottomColor: '#E6E6E6'

    },
    item: {
        marginTop: 10,
        alignItems: 'center',
        width: window.width / 4,
    }
})