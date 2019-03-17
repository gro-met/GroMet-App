/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import * as firebase from 'firebase';
import {AppRegistry} from 'react-native';
import App from './App';
import PlotPage from './PlotPage'
import {name as appName} from './app.json';

var firebaseConfig = {
  apiKey: "AIzaSyD5lJW2xnGJXHzijMyJMHVTEa_60z6x2X4",
  authDomain: "gromet-a0b7d.firebaseapp.com",
  databaseURL: "https://gromet-a0b7d.firebaseio.com",
  projectId: "gromet-a0b7d",
  storageBucket: "gromet-a0b7d.appspot.com",
  messagingSenderId: "539802681511"
};
firebase.initializeApp(firebaseConfig);


AppRegistry.registerComponent(appName, () => PlotPage);
