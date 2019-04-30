import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Picker } from 'react-native';
//import { CheckBox, ListItem} from 'react-native-elements';
import CheckBox from 'react-native-check-box';
const { Map } = require('immutable');
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={
          isChecked1:false,
          isChecked2:false
        //   titleText = this.props.navigation.getParam('title', 'Info'),
        //   speciesText = this.props.navigation.getParam('species', 'Info')
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
                {/* <Text>{titleText}</Text>
                <Text>{speciesText}</Text> */}
                {/* <Text>titleText</Text>
                <Text>speciesText</Text> */}
                <View>
                {/* <CheckBox
                    center
                    title='Click Here'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                    onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                    }}
                /> */}
                    <CheckBox
                        style={{flex: 10, padding: 50}}
                        onClick={()=>{
                        this.setState({
                            isChecked1:!this.state.isChecked1
                        })
                        }}
                        isChecked={this.state.isChecked1}
                    />
                    <CheckBox
                        
                        style={{flex: 10, padding: 50}}
                        onClick={()=>{
                        this.setState({
                            isChecked2:!this.state.isChecked2
                        })
                        }}
                        isChecked={this.state.isChecked2}
                    />
                </View>
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