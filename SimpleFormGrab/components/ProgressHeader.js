import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Each View is highlighted on successfull event
export default class ProgressHeader extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 120, height: 50, backgroundColor: '#f5f5f5'}}><Text style={{padding:15}}>Step 1 ></Text></View>
                <View style={{width: 120, height: 50, backgroundColor: '#fefefe'}}><Text style={{padding:15}}>Step 2 ></Text></View>
                <View style={{width: 120, height: 50, backgroundColor: '#f5f5f5'}}><Text style={{padding:15}}>Step 3</Text></View>
            </View>
        );
    }
}

AppRegistry.registerComponent('ProgressHeader', () => ProgressHeader);

