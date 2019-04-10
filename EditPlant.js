import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
const { Map } = require('immutable');
import firebase from 'firebase';

export default class EditPlant extends React.Component {
  state = {
    newName: '',
    newSpecies: ''
  }
  handleName = (text) => {
      this.setState({ newName: text })
  }
  handleSpecies = (text) => {
      this.setState({ newSpecies: text })
  }
  changeInfo = (newName, newSpecies) => {
    // key = navigation.getParam('key', 'Infos')
    // firebase.database().ref('/info' + key).set({
    //   name: newName,
    //   species: newSpecies
    // });
    Alert.alert(
      'Plant Data Changed',
      'newName Changed to: ' + newName + '\nSpecies Changed to: ' + newSpecies,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
  // writePlantData = (newName,newSpecies)=>{
  //   this.changeInfo(newName, newSpecies)
  //   firebase.database().ref('/info' + key).set({
  //     name: newName,
  //     species: newSpecies
  //   });
  // }

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
            <Text>    Edit Plant Data</Text>  
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#13771b"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Species"
               placeholderTextColor = "#13771b"
               autoCapitalize = "none"
               onChangeText = {this.handleSpecies}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                () => this.changeInfo(this.state.newName, this.state.newSpecies)  
               }>
               <Text style = {styles.submitButtonText}> Submit Changes </Text>
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
      backgroundColor: '#13771b',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
