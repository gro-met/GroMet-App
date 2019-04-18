import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
const { Map } = require('immutable');
import firebase from 'firebase';
import ModalSelector from 'react-native-modal-selector';
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const uploadImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios'? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime()
    let BlobUpload = null
    const imageRef = storage.ref('images').child(`${sessionId}`)

    fs.readFile(uploadUri, 'base64')
    .then((data) => {
      return Blob.build(data, { type: `${mime};BASE64`} )
    })
    .then((blob) => {
      BlobUpload = blob
      return imageRef.put(blob, {contentType: mime })
    })
    .then(() => {
      BlobUpload.close()
      return imageRef.getDownloadURL()
    })
    .then((url) => {
      resolve(url)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default class EditPlant extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newName: '',
      newSpecies: ''
    }
  }

  handleName = (text) => {
      this.setState({ newName: text })
  }
  changeInfo = (newName, newSpecies) => {
    key = this.props.navigation.getParam('key', 'Info')
    firebase.database().ref('/info/' + key.id).update({
      name: newName,
      species: newSpecies
    });
    Alert.alert(
      'Plant Data Changed',
      'newName Changed to: ' + newName + '\nSpecies Changed to: ' + newSpecies,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
  chooseImage() {
    this.setState({ uploadURL: '' })

    ImagePicker.launchImageLibrary({}, response => {
      uploadImage(response.uri)
        .then(url => this.setState({ uploadURL: url} ))
        .catch(error => console.log(error))
    })
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
    const { navigation } = this.props;
    let index = 0;
    const data = [
      { key: index++, label: "African violet" },
      { key: index++, label: "Cactus" },
      { key: index++, label: "Daffodil" },
      { key: index++, label: "Orchid" },
      { key: index++, label: "Rose" },
      { key: index++, label: "Succulent" },
      { key: index++, label: "Spider plant" },
      { key: index++, label: "Wandering jew" },
    ]
    
    return(
      <View style = {styles.container}>
        <Text>    Edit Plant Data</Text>
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Name"
            placeholderTextColor = "#13771b"
            autoCapitalize = "none"
            onChangeText = {this.handleName}/>

        <ModalSelector
          data={data}
          initValue="Species"
          style={styles.input}
          onChange={(option)=>{ this.setState({newSpecies:option.label}) }}>
          <TextInput
            editable={false}
            placeholder="Species"
            placeholderTextColor = "#13771b"
            value={this.state.newSpecies} />
        </ModalSelector>

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
