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
    return (
      var forms = [UploadPhotoForm, UserInputForm];

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