import React, {Component} from "react";
import {Text, View,Image} from "react-native";
export default class PlotCard extends Component {
  render() {
    return(
      <View  style={styles.outerContainer}>
        <Image style={styles.image} url={props.data.img}/>
        <View style={styles.container}>
          <Text style={styles.plantName}>{props.data.name}</Text>
          <Text>Plot goes here!!!</Text>
        </View>
        <View style={styles.line}></View>
      </View>);
    }
  }
  const styles = {
    outerContainer:{
      flex:1,
      flexDirection: 'row',
      alignItems:'stretch'
    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: "white",
      alignItems:"center",
      padding:16
    },
    plantName: {
      marginLeft:16,
      color:'blue',
      fontSize:16,
    },
    image: {
      height: 50,
      width: 50,
      marginRight: 16,
    },
    line: {
      height: 1.5,
      backgroundColor: "#d3d3d3"
    }
  }
