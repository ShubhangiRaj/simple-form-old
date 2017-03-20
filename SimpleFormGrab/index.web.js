import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import FormContainer from './components/FormContainer';


class SimpleFormGrab extends Component {
  render() {
    return (
      <View >
        <ScrollView>
          <FormContainer/>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('SimpleFormGrab', () => SimpleFormGrab);
AppRegistry.runApplication('SimpleFormGrab', { rootTag: document.getElementById('react-app') });