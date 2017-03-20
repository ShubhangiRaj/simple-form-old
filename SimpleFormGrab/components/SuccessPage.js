import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class SuccessPage extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#F7F9FB', flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Complete</Text>
            </View>
        );
        
    }
}

AppRegistry.registerComponent('SuccessPage', () => SuccessPage);

