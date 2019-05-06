import React, {Component} from "react";
import { Button,View, FlatList, List, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Emoji from 'react-native-emoji';
import Todo from './Todo';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Info'),
      headerStyle: {
        backgroundColor: '#43a047',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      },
    };
  };
  render() {
    const { navigation } = this.props;
    const plantName = navigation.getParam('title', 'Info');
    const plantSpecies = navigation.getParam('species', 'Info');
    const data = navigation.getParam('data',
    {
      hum: [0,0,0,0,0,0,0,0,0,0],
      light: [0,0,0,0,0,0,0,0,0,0]
    });

    return (
      <View style={
        { flex: 1,
          flexDirection: 'column',
          marginHorizontal: '10%',
          marginVertical: '10%',
          justifyContent: 'space-between'
        }}>
        <View style={{ flex: 1, alignItems: 'center' }} >
        <Image style={{ flex: 1, height: 150, width: 150, borderRadius: 150/2 }}
               source={{ uri: this.props.navigation.state.params['img'] }}
        />
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Emoji name='droplet' style={{flex: 2, fontSize: 50}}/>
            <View style={{ flex: 1, flexDirection: 'column' }} >
              <View style={{ flex: 1, height: 30 }} />
            </View>
            <View style={{ flex: 7, flexDirection: 'column' }} >
              <LineChart
                      style={{ flex: 4 }}
                      gridMin={ -10 }
                      data={ data.hum }
                      contentInset={{ top: 30, left: 10, right: 10 }}
                      svg={{ stroke: '#2196f3' }}
                  >
                  <Grid/>
              </LineChart>
              <XAxis
                  style={{ flex: 1 }}
                  data={ data.hum }
                  contentInset={{ left: 10, right: 10 }}
                  formatLabel={ (value, index) => index }
                  svg={{ fontSize: 10, fill: 'grey' }}
              />
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Emoji name='sunny' style={{flex:2, fontSize: 50}}/>
          <View style={{ flex: 1, flexDirection: 'column' }} >
            <View style={{ flex: 1, height: 30 }} />
          </View>
          <View style={{ flex: 7, flexDirection: 'column' }} >
            <LineChart
                    style={{ flex: 4 }}
                    gridMin={ -10 }
                    data={ data.light }
                    contentInset={{ top: 30, left: 10, right: 10 }}
                    svg={{ stroke: '#fdd835' }}
                >
                <Grid/>
            </LineChart>
            <XAxis
                style={{ flex: 1, height: 30 }}
                data={ data.hum }
                contentInset={{ left: 10, right: 10 }}
                formatLabel={ (value, index) => index }
                svg={{ fontSize: 10, fill: 'grey' }}
            />
          </View>
        </View>
        <TouchableOpacity
            style = {styles.submitButton}
            button onPress = {() => this.props.navigation.navigate('Todo',
              {species: plantSpecies, title: plantName})}>
            <Text style = {styles.submitButtonText}> Todo for {plantName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#13771b',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#43a047',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})
