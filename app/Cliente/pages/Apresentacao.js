import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    ScrollView
} from "react-native";

class Explore extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{ color: 'orange', fontSize: 40, fontWeight: '100', paddingHorizontal: 20 }}>
                        Faça sua
                    </Text>
                    <Text style={{ color: 'orange', fontSize: 40, fontWeight: '100', paddingHorizontal: 20 }}>
                        lista de feira
                    </Text>

                    <Image source={require('../assets/Ilustras/undraw_to_do_list_a49b.png')}
                        style={{ width: 250, height: 145, marginTop: 20, marginLeft: 60}}/>
                                                
                                
                    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: '100', alignSelf: 'center' }}>
                            Mande uma foto da lista
                        </Text>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: '100', alignSelf: 'center' }}>
                            Escaneie o QR code uma nota fiscal
                        </Text>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: '100', alignSelf: 'center' }}>
                            Monte a lista manualmente
                        </Text>
                    </View>

                    <View style={{alignItems: 'center',
                                    margin: 100,
                                    marginBottom: 0,
                                    marginTop: 30,
                                    backgroundColor: 'white',
                                    width: 33.6,
                                    height: 10.4,
                                    flexDirection:'row',
                                    justifyContent: 'center',
                                    alignSelf: 'center'}}>
                        <Text style={{color:'orange', fontSize: 100}}>•</Text>
                        <Text style={{color:'#f5f5f5', fontSize: 100}}>•</Text>
                        <Text style={{color:'#f5f5f5', fontSize: 100}}>•</Text>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center",
                        alignItems: "stretch"}}>
                        <TouchableHighlight
                            style={style.loginButton}
                            onPress={() => this.props.navigation.navigate('bottomNavigator')}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                }}>
                                    COMEÇAR AGORA
                            </Text>
                        </TouchableHighlight>
                    </View>


                </View>
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{ color: 'orange', fontSize: 40, fontWeight: '100', paddingHorizontal: 20 }}>
                        Veja opções de 
                    </Text>
                    <Text style={{ color: 'orange', fontSize: 40, fontWeight: '100', paddingHorizontal: 20 }}>
                        supermercados
                    </Text>

                    <Image source={require('../assets/Ilustras/undraw_add_to_cart_vkjp.png')}
                        style={{ width: 250, height: 145, marginTop: 20, marginLeft: 60}}/>
                                                
                                
                    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: '100', alignSelf: 'center' }}>
                            Valores da feira e quantidade de itens
                        </Text>
                        <Text style={{ color: 'orange', fontSize: 20, fontWeight: '100', alignSelf: 'center' }}>
                            variam por supermercado
                        </Text>
                    </View>

                    <View style={{alignItems: 'center',
                                    margin: 100,
                                    marginBottom: 0,
                                    marginTop: 56,
                                    backgroundColor: 'white',
                                    width: 33.6,
                                    height: 10.4,
                                    flexDirection:'row',
                                    justifyContent: 'center',
                                    alignSelf: 'center'}}>
                        <Text style={{color:'#f5f5f5', fontSize: 100}}>•</Text>
                        <Text style={{color:'orange', fontSize: 100}}>•</Text>
                        <Text style={{color:'#f5f5f5', fontSize: 100}}>•</Text>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center",
                        alignItems: "stretch"}}>
                        <TouchableHighlight
                            style={style.loginButton}
                            onPress={() => this.props.navigation.navigate('bottomNavigator')}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                }}>
                                    COMEÇAR AGORA
                            </Text>
                        </TouchableHighlight>
                    </View>


                </View>
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{ color: 'orange', fontSize: 40, fontWeight: '100', paddingHorizontal: 20 }}>
                        Peça pelo app
                    </Text>
                    <Text style={{ color: 'orange', fontSize: 40, fontWeight: '100', paddingHorizontal: 20 }}>
                        e receba em casa
                    </Text>

                    <Image source={require('../assets/Ilustras/undraw_drone_delivery_5vrm.png')}
                        style={{ width: 320, height: 145, marginTop: 50, marginLeft: 20}}/>

                    <View style={{alignItems: 'center',
                                    margin: 100,
                                    marginBottom: 0,
                                    marginTop: 117,
                                    backgroundColor: 'white',
                                    width: 33.6,
                                    height: 10.4,
                                    flexDirection:'row',
                                    justifyContent: 'center',
                                    alignSelf: 'center'}}>
                        <Text style={{color:'#f5f5f5', fontSize: 100}}>•</Text>
                        <Text style={{color:'#f5f5f5', fontSize: 100}}>•</Text>
                        <Text style={{color:'orange', fontSize: 100}}>•</Text>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center",
                        alignItems: "stretch"}}>
                        <TouchableHighlight
                            style={style.loginButton}
                            onPress={() => this.props.navigation.navigate('bottomNavigator')}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                }}>
                                    COMEÇAR AGORA
                            </Text>
                        </TouchableHighlight>
                    </View>


                </View>
            </ScrollView>
        );
    }
}
export default Explore;

const style = StyleSheet.create({
    loginButton: {
        alignItems: 'center',
        margin: 40,
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: '#59c06e',
        padding: 10,
        borderRadius: 10
    },
});