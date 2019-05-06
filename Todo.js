import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Picker } from 'react-native';
import CheckBox from 'react-native-checkbox';
//import CheckBox from 'react-native-check-box';
const { Map } = require('immutable');
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Todo extends React.Component {
    //this constructor changes the filling of the checklist
    constructor(props){
        super(props);
        this.state={
          isChecked1:false,
          isChecked2:false,
          isChecked3:false,
          stringy:"Am I a good boi?",
          watered:"Have I been watered?",
          appearsHealthy:"Am I healthy?",
          titleText: this.props.navigation.getParam('title', 'Info'),
          speciesText:this.props.navigation.getParam('species', 'Info')
        }
      }

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
        //const { navigation } = this.props;
        return(
            <View
                
                style = {styles.container}>
                <Text> {this.state.titleText} your {this.state.speciesText} </Text>
                <Text> needs these things.{'\n'}{'\n'}</Text>
                <View>
                    <CheckBox
                        label={this.state.watered}
                        style={{flex: 50, padding: 50}}
                        onClick={()=>{
                        this.setState({
                            isChecked1:!this.state.isChecked1
                        })
                        }}
                        isChecked={this.state.isChecked1}
                    />
                    <CheckBox
                        label={this.state.appearsHealthy}
                        style={{flex: 50, padding: 50}}
                        onClick={()=>{
                        this.setState({
                            isChecked2:!this.state.isChecked2
                        })
                        }}
                        isChecked={this.state.isChecked2}
                    />
                    <CheckBox
                        label={this.state.stringy}
                        style={{flex: 50, padding: 50}}
                        onClick={()=>{
                        this.setState({
                            isChecked3:!this.state.isChecked3
                        })
                        }}
                        isChecked={this.state.isChecked3}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
 })