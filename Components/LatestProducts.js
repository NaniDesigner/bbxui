import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, 
    TouchableOpacity, Dimensions } from 'react-native';

import { Container, Content, Icon, Thumbnail, 
        Header, Left, Body, Right, Title, Item, Input } from 'native-base'
       
const {width, height} = Dimensions.get('window')        
class LatestProducts extends Component{
  render() {
    const images = {
        "1": require('../assets/c1.jpg'),
        "2": require('../assets/c2.jpg'),
        "3": require('../assets/c3.jpg'),
        "4": require('../assets/c4.jpg'),
        "5": require('../assets/c5.jpg'),
        "6": require('../assets/c6.jpg'),
        "7": require('../assets/c7.jpg'),
        "8": require('../assets/c1.jpg'),

    } 
      return (
        <View style={{ width: this.props.width / 2 - 20, height: this.props.width / 2 - 10, 
            borderWidth: 0.5, borderColor: '#dddddd', marginBottom: 10 }}>
            <View style={{ flex: 3 }}>
                <Image style={{flex:3, width: null, 
                    height: null, resizeMode: 'cover'}} 
                    source={images[this.props.imageSource]} />
            </View>
            <View style={{flex:1, alignItems:'flex-start', 
            justifyContent:'space-evenly', paddingLeft: 10}}>
                <Text style={{ fontSize: 10, color:'#3e5b8e' }}>Product Name</Text>
                <Text style={{ fontSize: 12, fontWeight:'bold' }}>Product Name</Text>
                <Text style={{ fontSize: 10 }}>24$</Text>
            </View>
        </View>
      );
  }
}
export default LatestProducts


const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
 });