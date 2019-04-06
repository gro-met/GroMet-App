import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
const { Map } = require('immutable');
import firebase from 'firebase';

export default class EditPlant extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('title', 'Info'),
  //     headerStyle: {
  //       backgroundColor: '#43a047',
  //     },
  //     headerTintColor: '#000',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   };
  render(){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>EditPlant Screen</Text>
      </View>
      );
    }
  }
 