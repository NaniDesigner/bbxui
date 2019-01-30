import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { Icon, container, Content, Header, Left, Right, Body, Thumbnail, Button, Container } from 'native-base'
// import EntypoIcon from 'react-native-vector-icons/Entypo'

class ProfileTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) =>(
            <Icon name="person" style={{ color:
            tintColor }} />
        )
    }
  render() {
      return (
          <Container style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <Header style={{backgroundColor: '#ffffff'}}>
              <Left><Icon name= 'md-person-add' style={{paddingLeaf:10}} ></Icon></Left>
                 <Body><Text>Profile</Text></Body>
                 <Right><Icon name= 'time' style={{paddingRight:10}} ></Icon></Right>
            </Header>
            
          </Container>
      );
  }
}
export default ProfileTab


const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
 });