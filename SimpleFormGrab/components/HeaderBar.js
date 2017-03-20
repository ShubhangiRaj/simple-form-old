import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class HeaderBar extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#F7F9FB'}}>
                <View style={{height: 50, backgroundColor: '#00B140'}}></View>
            </View>
        );
        
    }
}

AppRegistry.registerComponent('HeaderBar', () => HeaderBar);

