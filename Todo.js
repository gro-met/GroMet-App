import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Picker } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
const { Map } = require('immutable');
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Todo extends React.Component {
    // state =  {
    //     titleText = "Todo List for Plant",
    //     speciesText = this.props.navigation.getParam('species','info')
    // };

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

    render(){
        const { navigation } = this.props;
        return(
            <View style = {styles.container}>
              <Text>titleText</Text>
              <Text>speciesText</Text>
                {/* <CheckBox
                title='Click Here'
                checked={this.state.checked}/> */}
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
       backgroundColor: '#13771b',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })