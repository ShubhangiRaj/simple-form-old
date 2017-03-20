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
import UploadPhotoForm from './components/UploadPhotoForm';
import UserInputForm from './components/UserInputForm';


export default class SimpleFormGrab extends Component {

    render() {
        var forms = [UploadPhotoForm, UserInputForm];
        return (
            <View>
                <ScrollView>
                    <FormContainer forms = {forms}/>
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('SimpleFormGrab', () => SimpleFormGrab);
