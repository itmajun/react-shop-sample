import React, {Component} from 'react'
import {Dimensions, Image, ScrollView, StyleSheet, View} from "react-native";
import Swiper from 'react-native-swiper'
import SearchHeader from "../common/component/SearchHeader";
import ShortCut from "../common/component/ShortCut";
import NewAdd from "../common/component/NewAdd";


var shop = require('../image/tabbar_home_normal.png')
var shop_select = require('../image/tabbar_home_selected.png')
const { width } = Dimensions.get('window')

export default class MainScreen extends Component {

    state = {
        visible: false
    }

    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor}) => {
           return <Image source={ focused ? shop_select: shop} style={[styles.icon, {tintColor: tintColor}]}
            />
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 0)
    }

    render() {

        if (this.state.visible) {
            return (
                <View>
                    <SearchHeader/>
                    <ScrollView style= {{backgroundColor: '#F0F2F5'}} showsVerticalScrollIndicator={false}>
                        <Swiper width={width} height={240}  autoplay >
                            <Image source={{uri: 'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg'}}
                                   style={{flex: 1}}/>
                            <Image source={{uri: 'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg'}}
                                   style={{flex: 1}}/>
                            <Image source={{uri: 'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg'}}
                                   style={{flex: 1}}/>
                            <Image source={{uri: 'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg'}}
                                   style={{flex: 1}}/>
                        </Swiper>
                        <ShortCut/>
                        <NewAdd navigation={this.props.navigation}/>
                        <NewAdd/>
                        <NewAdd/>
                    </ScrollView>


                </View>
            )
        } else {
            return <View style={{width: width, height: 240}}></View>;

        }
    }

}




const styles = StyleSheet.create({
    main: {
      flex: 1
    },
    icon: {
        width: 30,
        height: 30,
    }
});