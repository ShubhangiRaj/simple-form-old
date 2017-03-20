/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
