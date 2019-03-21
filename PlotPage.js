import React, {Component} from "react";
import {RecyclerListView, LayoutProvider, DataProvider} from "recyclerlistview";
import {View, Dimensions, Text, Image} from "react-native";
import PlantCard from "./PlantCard";
import PlantData from "./TestPlantData"
let {height, width} = Dimensions.get('window');
export default class PlotPage extends Component {
    constructor(args) {
        super(args);
        this.state = {
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2
            }).cloneWithRows(PlantData)
        };
        this._layoutProvider = new LayoutProvider((i) => {
            return this.state.dataProvider.getDataForIndex(i).type;
        }, (type, dim) => {
            switch (type) {
                case "PLANT_ITEM":
                    dim.width = width;
                    dim.height = 80;
                    break;
                case "HEADER": // TODO: Not yet implemented --healym
                    dim.width = width;
                    dim.height = 300;
                    break;
                default:
                    dim.width = width;
                    dim.height = 0;

            }
        });
        this._renderRow = this._renderRow.bind(this);
    }


    _renderRow(type, data) {
        switch (type) {
            case "PLANT_ITEM":
                return <PlantCard data={data}/>;
            case "HEADER": // TODO: not yet implemented -- healym
                // return <TopWidget data={data}/>;
            default:
                return null;

        }

    }

    render() {
        return <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>GroMet Plant Monitoring System</Text>
            </View>
            <RecyclerListView rowRenderer={this._renderRow} dataProvider={this.state.dataProvider}
                              layoutProvider={this._layoutProvider}/>
        </View>
    }
}
const styles = {
    container: {
        flex: 1,

    },
    header:{
        height: 65,
        backgroundColor:'green',
        alignItems:"center",
        flexDirection:"row",
        elevation:4
    },
    headerText:{
        color:'white',
        fontSize:18,
        marginLeft: 16,
        paddingBottom:3
    },
    backIcon:{
        height:23,
        width:23,
        marginLeft:16

    }
}
