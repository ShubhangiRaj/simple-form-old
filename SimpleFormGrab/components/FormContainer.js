import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';

import HeaderBar from './HeaderBar';
import ProgressHeader from './ProgressHeader';
import SuccessPage from './SuccessPage';

export default class FormContainer extends Component {

    componentWillMount() {
        this.currentFormIndex = 0;
        this.forms = this.props.forms;
        this.forms.push(SuccessPage);
        this.isCurrentFormValid  = false;


        this.state = {
            currentForm         : this.forms[this.currentFormIndex],
            showNextButton      : true
        };
    }

    incrementFormIndex(){
        if(this.currentFormIndex < this.forms.length-1){
            this.currentFormIndex++;
        }
    }

    // this method would be required if we support Back traversal in the form flow
    decrementFormIndex(){
        if(this.currentFormIndex > 0){
            this.currentFormIndex--;
        }
    }

    getCurrentForm(){
        const CurrentForm  = this.state.currentForm ;
        return  <CurrentForm  onCurrentFormIsValid = {this.onCurrentFormIsValid} ref="currentFormInterface"/>
    }


    // This will be called by current form, (this method is a listener for validity of the current form ) 
    onCurrentFormIsValid = () => {
        this.isCurrentFormValid = true;
    }

    renderCurrentForm (){
        this.setState({
            currentForm : this.forms[this.currentFormIndex]
        });
        this.isCurrentFormValid = false;
    }

    next = () => {

        if(!this.isCurrentFormValid){
            this.refs.currentFormInterface.showErrorForInvalidForm();
            return;
        }
        this.incrementFormIndex();
        this.renderCurrentForm();

        if(this.currentFormIndex == this.forms.length - 1){
            this.setState({showNextButton : false});
        }
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <HeaderBar />
                    <ProgressHeader />
                    { this.getCurrentForm() }   
                    { this.state.showNextButton && <Button title = "Next" onPress={this.next} > </Button>  }          
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('FormContainer', () => FormContainer);
