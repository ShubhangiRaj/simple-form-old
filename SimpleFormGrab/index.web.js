import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import FormContainer from './components/FormContainer';
import UploadPhotoForm from './components/UploadPhotoForm';
import UserInputForm from './components/UserInputForm';


class SimpleFormGrab extends Component {
  render() {
    var forms = [UploadPhotoForm, UserInputForm];
    return (
      <View >
        <ScrollView>
          <FormContainer forms = {forms}/>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('SimpleFormGrab', () => SimpleFormGrab);
AppRegistry.runApplication('SimpleFormGrab', { rootTag: document.getElementById('react-app') });