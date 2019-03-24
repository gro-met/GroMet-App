import React, {Component} from "react";
import { View, FlatList, List, Text, Image, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import PlantCard from "./PlantCard";
import PlantData from "./TestPlantData"

class PlotPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: PlantData,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          extraData={this.props}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name} (${item.species})`}
              subtitle={`Humidity: ${item.latest_hum}\nLight Exposure: ${item.latest_light}`}
              leftAvatar={{ source: { uri: item.img } }}
              topDivider={true}
              bottomDivider={false}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default PlotPage;
