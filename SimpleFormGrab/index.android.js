// main android code - 16/03/2017

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import FormContainer from './components/FormContainer';


export default class SimpleFormGrab extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <FormContainer />
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('SimpleFormGrab', () => SimpleFormGrab);
