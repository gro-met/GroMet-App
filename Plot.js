/**
 * App for monitoring plant status
 * https://github.com/gro-met/GroMetApp
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const ViewTypes = { // more view types can be added if needed
    FULL: 0,
};

let containerCount = 0;

class PlantContainer extends React.Component {
  let pic = {
    uri: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  };
  let plot = {
    uri: 'https://www.skillsyouneed.com/images/cartesian-graph.png'
  };
  constructor(args) {
      super(args);
      this._containerId = containerCount++;
  }
  render() {
      return (<View style={{flex:1, flexDirection: 'row'}}{...this.props}>
                <Image source={pic} style={{flex: 1, resizeMode: 'contain' }}/>
                <View style={{flex:2, flexDirection: 'column'}}>
                  <Text style={{flex: 1}}> Charles </Text>
                  <Image source={plot} style={{flex: 1, resizeMode: 'contain' }}/>
                  // <View style={{flex:3}}> {this.props.children} </View>
                </View>
              </View>);
  }
}

/***
 * To use, move this into root component
 */
export default class PlotView extends React.Component {
    constructor(args) {
        super(args);

        let { width } = Dimensions.get("window");

        // Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
        // THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });

        //Create the layout provider
        //First method: Given an index return the type of item
        //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
        //If you need data based check you can access your data provider here
        //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
        //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
        this._layoutProvider = new LayoutProvider(
            index => {
                return ViewTypes.FULL;
            },
            (type, dim) => {
              switch (type) {
                case default: // Default to FULL
                  dim.width = width;
                  dim.height = 140;
                  break;
              }
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            dataProvider: dataProvider.cloneWithRows(this._generateArray(300))
        };
    }

    _generateArray(n) {
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }
        return arr;
    }

    //Given type and data return the view component
    _rowRenderer(type, data) {
      switch (type) {
        case ViewTypes.FULL:
          return (
              <PlantContainer style={styles.container}>
                  <Text>Data: {data}</Text>
              </PlantContainer>
          );
        case default:
          return null;
      }
    }

    render() {
        return <RecyclerListView layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />;
    }
}
const styles = {
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#00a1f1"
    },
    containerGridLeft: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ffbb00"
    },
    containerGridRight: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#7cbb00"
    }
};
