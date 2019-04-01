import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';

import { createStackNavigator, createAppContainer } from "react-navigation";

export default class EditScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Info'),
      headerStyle: {
        backgroundColor: '#43a047',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  render() {
  const { navigation } = this.props;

  }
}