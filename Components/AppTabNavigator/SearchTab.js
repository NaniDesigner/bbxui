import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image,
     Dimensions, TouchableOpacity } from 'react-native';

import { Container, Content, Icon, Thumbnail,
    Header, Left, Body, Right, Title, Item, Input, Card, CardItem, 
} from 'native-base'

import { StackNavigator } from 'react-navigation';
import LatestProducts from '../LatestProducts'

const { width, height } = Dimensions.get('window')
class SearchTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="search" style={{
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
                    {/* --- LatestProducts --- */}

                    <View style={{ marginTop: 10 }}>

                        {/* <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Latest Products</Text> */}
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
                            <TouchableOpacity>
                                <LatestProducts imageSource="7" width={width} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LatestProducts imageSource="8" width={width} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* --- LatestProducts --- */}
                </Content>

            </Container>
        );
    }
}
export default SearchTab


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});