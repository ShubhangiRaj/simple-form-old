import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  StatusBar
} from 'react-native';

import HeaderBar from './HeaderBar';
import ProgressHeader from './ProgressHeader';
import UploadPhoto from './UploadPhoto';
import NativeBaseForm from './NativeBaseForm';

export default class FormContainer extends Component {

    componentWillMount() {
        this.currentComponentIndex = 0;
        this.components= [UploadPhoto, NativeBaseForm];
        this.state = {
            currentComponent: this.components[this.currentComponentIndex],
        };
    }

    incrementComponentIndex(){
        if(this.currentComponentIndex < this.components.length-1){
            this.currentComponentIndex++;
        }
    }

    // this method would be required to support Back traversal in the form flow
    decrementComponentIndex(){
        if(this.currentComponentIndex > 0){
            this.currentComponentIndex--;
        }
    }

    getCurrentComponent(){
        const CurrentComponent = this.state.currentComponent;
        return <CurrentComponent/>;
    }

    renderCurrentComponent(){
        this.setState({
            currentComponent: this.components[this.currentComponentIndex]
        });
    }

    next = () => {
        this.incrementComponentIndex();
        this.renderCurrentComponent();
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <StatusBar backgroundColor="blue" barStyle="light-content"/>
                    <HeaderBar />
                    <ProgressHeader />
                    { this.getCurrentComponent() }   
                    <Button title = "Next" onPress={this.next} > </Button>            
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('FormContainer', () => FormContainer);
