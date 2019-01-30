import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, ScrollView,
    TouchableOpacity, Dimensions, Button
} from 'react-native';


import { StackNavigator } from 'react-navigation';

import {
    Container, Content, Icon, Thumbnail,
    Header, Left, Body, Right, Title, Item, Input, Card, CardItem,
} from 'native-base'

import Swiper from 'react-native-swiper'

import CardComponent from '../CardComponent'
import LatestProducts from '../LatestProducts'

const { width, height } = Dimensions.get('window')
class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" style={{
                color:
                    tintColor
            }} />
        )
    }
    render() {
        return (
            <Container style={styles.container}>
                {/* ---Header/--- */}
                <Header style={{ height: 70, backgroundColor: '#3e5b8e' }}>
                    <Left><Icon name='md-menu' style={{ paddingLeaf: 15, color: 'white' }} ></Icon></Left>
                    <Body><Text style={{ color: 'white', fontSize: 34 }}>BBX</Text></Body>
                    <Right><Icon name='md-card' style={{ paddingRight: 15, color: 'white' }} ></Icon></Right>
                </Header>
                {/* ---Header/--- */}
                {/* ---Search--- */}
                <View style={{
                    position: 'absolute', left: 0, right: 0,
                    top: 70, height: 70, flexDirection: 'row', alignItems: 'center',
                    paddingHorizontal: 5, backgroundColor: '#3e5b8e'
                }}>
                    <TouchableOpacity>
                        <View style={{
                            width: 100, height: 50,
                            backgroundColor: 'white', borderRadius: 4, padding: 10
                        }}>
                            <Text style={{ fontSize: 12 }}>Shop by</Text>
                            <Text style={{ fontWeight: 'bold' }}>Category</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
                        <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                            <Icon name='search' style={{ fontSize: 20, paddingTop: 5 }} />
                            <Input placeholder='Search' />
                        </Item>
                    </View>
                </View>
                {/* ---search--- */}
                <Content style={{ marginTop: 70 }}>
                    {/* ---scroll--- */}
                    <Swiper autoplay={true} style={{ height: 200 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{
                                flex: 1, height: null, width: null,
                                resizeMode: 'contain'
                            }} source={require('../../assets/Shop3.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{
                                flex: 1, height: null, width: null,
                                resizeMode: 'contain'
                            }} source={require('../../assets/Shop4.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{
                                flex: 1, height: null, width: null,
                                resizeMode: 'contain'
                            }} source={require('../../assets/Shop2.jpg')} />
                        </View>
                    </Swiper>
                    {/* ---scroll--- */}
                    {/* ---Category--- */}
                    <View style={{ height: 210 }}>
                        <View style={{
                            flex: 1, flexDirection: 'row',
                            justifyContent: 'space-between', alignItems: 'center',
                            paddingHorizontal: 8, marginTop: 10
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>Category</Text>
                            {/* <Text>Watch All</Text>   */}
                        </View>
                        <View style={{ flex: 3, }}>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                    alignItems: 'center'
                                }} >
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c1.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c2.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c3.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c4.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c5.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c6.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c7.jpg')} />
                            </ScrollView>
                        </View>
                        <View style={{ flex: 3, }}>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                    alignItems: 'center'
                                }} >
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c6.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c5.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c4.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c7.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c3.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c2.jpg')} />
                                <Thumbnail style={{
                                    marginHorizontal: 7, borderColor: '#3e5b8e',
                                    borderWidth: 3, width: 75, height: 75,
                                }}
                                    source={require('../../assets/c1.jpg')} />
                            </ScrollView>
                        </View>
                    </View>

                    {/* ---Category--- */}
                    <View style={{ height: 150 }}>
                        <View style={{
                            flex: 1, flexDirection: 'row',
                            justifyContent: 'space-between', alignItems: 'center',
                            paddingHorizontal: 8, marginTop: 20
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>Advertising</Text>
                            {/* <Text>Watch All</Text>   */}
                        </View>

                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View style={{
                                height: 100, width: width - 40,
                                paddingLeft: 10, paddingRight: 10, marginTop: 20
                            }}>
                                <Image style={{
                                    flex: 1, width: null, height: null,
                                    resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                }}
                                    source={require('../../assets/ads1.png')} />
                            </View>
                            <View style={{
                                height: 100, width: width - 40,
                                paddingLeft: 10, paddingRight: 10, marginTop: 20
                            }}>
                                <Image style={{
                                    flex: 1, width: null, height: null,
                                    resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                }}
                                    source={require('../../assets/ads2.png')} />
                            </View>
                            <View style={{
                                height: 100, width: width - 40,
                                paddingLeft: 10, paddingRight: 10, marginTop: 20
                            }}>
                                <Image style={{
                                    flex: 1, width: null, height: null,
                                    resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                }}
                                    source={require('../../assets/ads3.jpg')} />
                            </View>
                        </ScrollView>

                    </View>
                    {/* --- LatestProducts --- */}
                    
                    <View style={{ marginTop: 10 }}>

                        <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Latest Products</Text>
                        <View style={{
                            paddingHorizontal: 10, marginTop: 10,
                            flexDirection: 'row', flexWrap: 'wrap',
                            justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity>
                                <LatestProducts imageSource="1" width={width} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LatestProducts imageSource="2" width={width} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LatestProducts imageSource="3" width={width} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LatestProducts imageSource="4" width={width} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LatestProducts imageSource="5" width={width} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LatestProducts imageSource="6" width={width} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* --- LatestProducts --- */}
                    {/* ---LatestListing---  */}
                    <Card>
                        <CardItem>
                            <View style={{ marginTop: 0 }}>
                                <View style={{
                                    flex: 1, flexDirection: 'row',
                                    justifyContent: 'space-between', alignItems: 'center',
                                    
                                }}>
                                    <Text style={{ fontWeight: 'bold' }}>Latest Listing</Text>
                                    <Text style={{fontWeight: 'bold', justifyContent:'space-between'}}>See More<Icon name='arrow-forward' style={{fontSize: 12, paddingLeft: 5}}></Icon> </Text>  
                                </View>
                             
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <View style={{
                                        height: 140, width: 120,
                                        paddingLeft: 5, paddingRight: 5, marginTop: 5
                                    }}>
                                        <Image style={{
                                            flex: 1, width: null, height: null,
                                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                        }}
                                            source={require('../../assets/ads1.png')} />
                                    </View>
                                    <View style={{
                                        height: 140, width: 120,
                                        paddingLeft: 5, paddingRight: 5, marginTop: 5
                                    }}>
                                        <Image style={{
                                            flex: 1, width: null, height: null,
                                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                        }}
                                            source={require('../../assets/ads2.png')} />
                                    </View>
                                    <View style={{
                                        height: 140, width: 120,
                                        paddingLeft: 5, paddingRight: 5, marginTop: 5
                                    }}>
                                        <Image style={{
                                            flex: 1, width: null, height: null,
                                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                        }}
                                            source={require('../../assets/ads3.jpg')} />
                                    </View>
                                    <View style={{
                                        height: 140, width: 120,
                                        paddingLeft: 5, paddingRight: 5, marginTop: 5
                                    }}>
                                        <Image style={{
                                            flex: 1, width: null, height: null,
                                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                        }}
                                            source={require('../../assets/ads1.png')} />
                                    </View>
                                    <View style={{
                                        height: 140, width: 120,
                                        paddingLeft: 5, paddingRight: 5, marginTop: 5
                                    }}>
                                        <Image style={{
                                            flex: 1, width: null, height: null,
                                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                        }}
                                            source={require('../../assets/ads2.png')} />
                                    </View>
                                    <View style={{
                                        height: 140, width: 120,
                                        paddingLeft: 5, paddingRight: 5, marginTop: 5
                                    }}>
                                        <Image style={{
                                            flex: 1, width: null, height: null,
                                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1
                                        }}
                                            source={require('../../assets/ads3.jpg')} />
                                    </View>
                                    

                                    
                                </ScrollView>

                            </View>


                        </CardItem>
                    </Card>
                    {/* ---LatestListing--- */}
                    {/* ---HotProducts--- */}
                    <Card>
                        <CardItem>
                             <View style={{marginTop: 0}}>
                                <View style={{
                                        flex: 1, flexDirection: 'row',
                                        justifyContent: 'space-between', alignItems: 'center',
                                        
                                    }}>
                                        <Text style={{ fontWeight: 'bold' }}>Hot Products</Text>
                                        <Text style={{fontWeight: 'bold', justifyContent:'space-between'}}>See more<Icon name='arrow-forward' style={{fontSize: 12, paddingLeft: 5}}></Icon> </Text>  
                                    </View>
                                    <View style={{ height: 150, marginTop: 10 }}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                      <View style={{ height: 150, width: 200, marginLeft:10, 
                                        borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 3 }}>
                                          <Image source={require
                                          ('../../assets/c3.jpg')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, padding: 10}}>
                                              <Text style={{fontSize:14, fontWeight:'bold'}}>Hello</Text>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>
                                      <View style={{ height: 150, width: 200, marginLeft:10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 3 }}>
                                          <Image source={require
                                          ('../../assets/c2.jpg')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, padding: 10}}>
                                              <Text style={{fontSize:14, fontWeight:'bold'}}>Hello</Text>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>
                                      <View style={{ height: 150, width: 200, marginLeft:10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 3 }}>
                                          <Image source={require
                                          ('../../assets/c1.jpg')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, padding: 10}}>
                                              <Text style={{fontSize:14, fontWeight:'bold'}}>Hello</Text>
                                              <Text>Hello</Text>
                                          </View>
                                      </View> 
                                      <View style={{ height: 150, width: 200, marginLeft:10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 3 }}>
                                          <Image source={require
                                          ('../../assets/c4.jpg')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, padding: 10}}>
                                              <Text style={{fontSize:14, fontWeight:'bold'}}>Hello</Text>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>
                                      <View style={{ height: 150, width: 200, marginLeft:10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 3 }}>
                                          <Image source={require
                                          ('../../assets/c5.jpg')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, padding: 10}}>
                                              <Text style={{fontSize:14, fontWeight:'bold'}}>Hello</Text>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>
                                      <View style={{ height: 150, width: 200, marginLeft:10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 3 }}>
                                          <Image source={require
                                          ('../../assets/c6.jpg')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, padding: 10}}>
                                              <Text style={{fontSize:14, fontWeight:'bold'}}>Hello</Text>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>                                  
                                    </ScrollView>
                                </View>

                             </View>
                        </CardItem>
                    </Card>
                    {/* ---HotProducts--- */}
                </Content>
            </Container>
        );
    }
}
export default HomeTab


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});