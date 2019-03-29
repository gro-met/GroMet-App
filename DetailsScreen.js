import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class DetailsScreen extends React.Component {
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
    const data = navigation.getParam('data',
    {
      hum: [0,0,0,0,0,0,0,0,0,0],
      light: [0,0,0,0,0,0,0,0,0,0]
    });

    return (
      <View>
        <AreaChart
              style={{ height: 200 }}
              data={ data.hum }
              contentInset={{ top: 30, bottom: 30 }}
              curve={ shape.curveNatural }
              svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          >
          <Grid/>
        </AreaChart>
        <AreaChart
                style={{ height: 200 }}
                data={ data.light }
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
            <Grid/>
        </AreaChart>
      </View>
    );
  }
}
