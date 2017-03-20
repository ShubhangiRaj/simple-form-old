import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');


// Each View is highlighted on successfull event
export default class ProgressHeader extends Component {
   componentWillMount() {
        this.state = {
            color: 'red',
        };
    }


    render() {
        return (
            <View style={{ flexDirection: 'row', width}}>
                <View style={{ backgroundColor: '#f5f5f5', flex:1}}>
                  <Text style={{color:'this.state.color', padding:15}}>{this.state.color} ></Text>
                </View>
                <View style={{ backgroundColor: '#fefefe', flex:1}}>
                  <Text style={{padding:15}}>Step 2 ></Text>
                </View>
                <View style={{ backgroundColor: '#f5f5f5',flex:1}}>
                  <Text style={{padding:15}}>Step 3</Text>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('ProgressHeader', () => ProgressHeader);

