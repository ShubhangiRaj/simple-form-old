import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';

import {Container, Content, Text, Button, Form, Item, Input, Label } from 'native-base';

export default class NativeBaseForm extends Component {
      componentWillMount() {
          this.state = {firstName : "", lastName: "", contactNumber:"", address: "", 
                        firstNameErrMsg: "", lastNameErrMsg: "", contactNumberErrMsg:"",addressErrMsg:""};
      }

    onPressButton = () =>{
      this.validateInputFields();
    }

    validateInputFields = () => {
        var firstNameInput, lastNameInput, contactNumberInput, addressInput, firstNameErr, lastNameErr, contactNumErr, addressErr;
        
        // firstName Input Validation
        firstNameInput = this.state.firstName;
        var letters = /^[A-Za-z]+$/;
        if(!/^[a-zA-Z]*$/g.test(firstNameInput) || firstNameInput === ""){
            firstNameErr = "Enter a valid input";
        }
        // lastName Input Validation
        lastNameInput = this.state.lastName;
        var letters = /^[A-Za-z]+$/;
        if(!/^[a-zA-Z]*$/g.test(lastNameInput) || lastNameInput === ""){
            lastNameErr = "Enter a valid input";
        } 
        // contactNumber Input Validation
        contactNumberInput = this.state.contactNumber;
        if (isNaN(contactNumberInput) || contactNumberInput === "") {
            contactNumErr = "Enter a valid input";
        } 
        // address Input Validation
        addressInput = this.state.address;
        if (addressInput === "") {
            addressErr = "Enter a valid input";
        } 
        if( firstNameErr != null || lastNameErr != null || contactNumErr != null || addressErr != null){
            this.setState({
                firstNameErrMsg : firstNameErr,
                lastNameErrMsg : lastNameErr,
                contactNumberErrMsg : contactNumErr,
                addressErrMsg : addressErr
            });
            this.forceUpdate();
        }
        
    }

  render() {
    return (
        <Container>
                <Text style={{paddingLeft:20}}>Your Contact Information</Text>
                <Text style={{paddingLeft:20}}>Fill in the following details</Text>

                <Form style={{flex:1, width:320, height:500, marginLeft:20}}>
                    <Item floatingLabel regular style={{backgroundColor:'#EAEFF2', borderColor:'#CCD6DD', }}>
                        <Label style={{paddingLeft:20, paddingTop:4}}>Your First Name</Label>
                        <Input id="firstName" 
                               ref="firstName" onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} />
                    </Item>
                    <Text>{this.state.firstNameErrMsg}</Text>

                    <Item floatingLabel regular style={{backgroundColor:'#EAEFF2', borderColor:'#CCD6DD'}}>
                        <Label style={{paddingLeft:20,paddingTop:4}}>Your Last Name</Label>
                        <Input id="lastName" ref="lastName" onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} />
                    </Item>
                    <Text>{this.state.lastNameErrMsg}</Text>

                   <Item floatingLabel regular style={{backgroundColor:'#EAEFF2', borderColor:'#CCD6DD'}}>
                        <Label style={{paddingLeft:20,paddingTop:4}}>Contact Number</Label>
                        <Input id="contactNumber" ref="contactNumber" onChangeText={(contactNumber) => this.setState({contactNumber})} value={this.state.contactNumber} />
                    </Item>
                    <Text>{this.state.contactNumberErrMsg}</Text>

                    <Item floatingLabel regular style={{backgroundColor:'#EAEFF2', borderColor:'#CCD6DD', height:100}}>
                        <Label style={{paddingLeft:20,paddingTop:4, marginBottom:20}}>Address</Label>
                        <Input id="address" ref="address" onChangeText={(address) => this.setState({address})} value={this.state.address} />

                    </Item> 
                    <Text>{this.state.addressErrMsg}</Text>

                    <Button onPress={this.onPressButton} block style={{backgroundColor:'#CCD6DD', flex:1,justifyContent: 'center', alignItems: 'center', marginBottom:100}}><Text>Next</Text></Button>  
    

                </Form>
        </Container>
    );
  }
}


