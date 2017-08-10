import React, {Component} from 'react'
import {
    Image, ScrollView, Text, TouchableOpacity, View, Dimensions, Modal, TouchableHighlight,
    SectionList, TextInput
} from "react-native";
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome'
import {TabNavigator} from "react-navigation";

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
export default class GoodsScreen extends Component {

    static navigationOptions = {
        title : '商品详情',
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerStyle: {
            height: 50
        }
    }

    state = {
        modalVisible: false,
    }

    render() {

        return (
            <View style= {{flex: 1}}>
                <ScrollView style= {{backgroundColor: '#F0F2F5', height: window.height-125}} showsVerticalScrollIndicator={false}>
                    <Swiper height={340}  autoplay >
                        <Image style= {{height: 340}} source={{uri: 'https://gd4.alicdn.com/imgextra/i4/25628539/TB2ZW.GoFXXXXbVXXXXXXXXXXXX_!!25628539.jpg'}}/>
                        <Image style= {{height: 340,}} source={{uri: 'https://gd4.alicdn.com/imgextra/i4/888785548/TB2fVUsob_0UKFjy1XaXXbKfXXa_!!888785548.jpg'}}/>
                        <Image style= {{height: 340}} source={{uri: 'https://gd2.alicdn.com/imgextra/i2/367794066/TB24bDsmVXXXXbYXXXXXXXXXXXX_!!367794066.jpg'}}/>
                    </Swiper>
                    <View style= {{margin: 10}}>
                        <Text style= {{fontSize: 16, fontWeight: 'bold'}}>Apple/苹果 iPad Pro 9.7寸 256G 4G wifi 玫瑰金 平板 国行现货</Text>
                        <Text style={{color: '#F47474',fontSize: 20, fontWeight: 'bold'}}> ¥ 18.00</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.75} style= {{marginTop:10,
                        justifyContent: 'space-between', flexDirection: 'row',borderTopColor: '#CACACA', borderTopWidth: 1,
                        borderBottomColor: '#CACACA', borderBottomWidth: 1, paddingLeft: 10, paddingRight: 10, height: 50,
                        alignItems: 'center'}} onPress = {()=> this.setState({modalVisible: true})}>
                        <Text style= {{width: 100, }}>请选择商品属性</Text>
                        <Icon name="angle-right" size={25} color="#CACACA"/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.75} style= {{
                        justifyContent: 'space-between', flexDirection: 'row',
                        borderBottomColor: '#CACACA', borderBottomWidth: 1, paddingLeft: 10, paddingRight: 10, height: 50,
                        alignItems: 'center'}}>
                        <Text style= {{width: 100, }}>详情</Text>
                        <Icon name="angle-right" size={25} color="#CACACA"/>
                    </TouchableOpacity>

                </ScrollView>
                <View style= {{ height: 50,flexDirection: 'row',position: 'absolute',bottom: 0, left: 0, right: 0}}>
                    <TouchableOpacity activeOpacity={0.85} style= {{flex:1, backgroundColor: '#FE9501',alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>加入购物车</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.85} style= {{flex: 1,backgroundColor: '#FA2F5A',alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{fontSize: 20, color: 'white'}}>立即购买</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: window.height - 300, flex: 1,backgroundColor: 'white' ,paddingLeft:20, paddingTop: 20,}}>
                        <View style= {{flex: 1,height: 150,justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Image style= {{width: 100, height: 100}} source= {{uri: 'https://gd4.alicdn.com/imgextra/i4/888785548/TB2fVUsob_0UKFjy1XaXXbKfXXa_!!888785548.jpg'}}/>

                            <View>
                                <Text>价格: ¥ 218.00</Text>
                                <Text>规格: 颜色: 金色</Text>
                                <Text>库存: 835</Text>
                                <Text>赠送200积分</Text>
                            </View>
                            <TouchableHighlight style= {{marginTop: -10, alignItems : 'flex-end'}} onPress={() => {
                                this.setState({modalVisible: !this.state.modalVisible})
                            }}>
                                <Icon name="times-circle" size={25} color="#CACACA"/>
                            </TouchableHighlight>
                        </View>
                        <View style= {{flex: 1}}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <SectionList
                                    sections={[
                                        {title: '颜色', data: [
                                            {
                                                key: '1',
                                                data: [
                                                    { name: '金色', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'},
                                                    {name: '黄色', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                                    {name: '白色', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg' },
                                                    {name: '蓝色', pic: 'https://img.alicdn.com/tfscom/TB2zzkZul4lpuFjy1zjXXcAKpXa_!!0-juitemmedia.jpg'}]
                                            }
                                        ]},
                                    ]}

                                    renderItem = {({item})=>

                                        <View style= {{flexDirection: 'row',flex: 1}}>

                                            {
                                                item.data.map((item,i) => {
                                                    return (
                                                        <TouchableOpacity key= {i} activeOpacity={0.75} style= {{marginLeft: 10 ,height: 30, borderColor: '#E6E6E6', borderWidth: 1, paddingLeft: 10, paddingRight: 10}}>
                                                            <Text>{item.name}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </View>
                                    }
                                    renderSectionHeader={({section}) => <View style= {{flex: 1, height: 25, marginTop: 10}} ><Text>{section.title}</Text></View>}
                                />
                            </ScrollView>
                            <View style= {{position: 'absolute',bottom: 0, left: 0, right: 0, flexDirection: 'row'}}>
                                <Text style= {{flex: 1}}>购买数量</Text>
                                <View style= {{flex:1,flexDirection: 'row'}}>
                                    <Icon.Button name="minus"  color="white" style= {{width: 10,height: 10, backgroundColor: 'white'}}/>
                                    <TextInput
                                        style={{width: 10}}
                                        placeholder="1"
                                    />
                                    <Icon.Button name="plus"  color="grey"  style= {{width: 10,height: 10,backgroundColor: 'white' }}/>
                                </View>
                            </View>
                        </View>

                    </View>
                </Modal>
            </View>
        )
    }

}