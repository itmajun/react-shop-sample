import React, {Component} from 'react'
import {Image, SectionList, Text, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";

export default class RightCategory extends Component {

    render() {
        return (
            <View style= {{flex: 3}}>
            <ScrollView style= {styles.right} showsVerticalScrollIndicator={false}>
                <SectionList

                    sections={[
                        {title: '进口乳制品', data: [
                            {key: '1', name: '进口牛奶', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                            {key: '2',name: '进口饮料', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                            {key: '3',name: '进口饼干', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                            {key: '4',name: '井口糕点', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                        ]},
                    ]}
                    renderItem = {({item})=>


                        <View style= {styles.content}>
                            <TouchableOpacity activeOpacity={0.75}>
                                <Image source= {{uri: item.pic}} style= {styles.img}/>
                                <Text style= {styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    renderSectionHeader={({section}) => <View style={{ flex: 1,width: (window.width /4) * 3, height: 25 }}><Text style={styles.sectionHeader}>{section.title}</Text></View>}
                    contentContainerStyle= {styles.list}
                    pageSize={4}
                />
            </ScrollView>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    right: {
        // width: Math.round((window.width / 4) * 3),
        flex: 1,
        flexDirection: 'row',
    },
    content: {
        width: window.width / 4,
        height: 80,
        alignItems: 'center'
    },
    img: {
        width: 30,
        height: 30,
    },
    name: {

    },
    sectionHeader: {
        borderBottomWidth: 4,
        borderBottomColor: '#E6E6E6'

    },
    list: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    }
})