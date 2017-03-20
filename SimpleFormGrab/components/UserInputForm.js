import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Text
} from 'react-native';


export default class UserInputForm extends Component {
    componentWillMount() {
        this.firstNameErrMsg     = "";
        this.lastNameErrMsg      = "",
        this.contactNumberErrMsg = "",
        this.addressErrMsg       = "",

        this.state = {
                        firstName           : "",
                        lastName            : "",
                        contactNumber       : "",
                        address             : "",
                        firstNameErrMsg     : "",
                        lastNameErrMsg      : "",
                        contactNumberErrMsg : "",
                        addressErrMsg       : ""
        };
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
            this.firstNameErrMsg     = firstNameErr;
            this.lastNameErrMsg      = lastNameErr;
            this.contactNumberErrMsg = contactNumErr;
            this.addressErrMsg       = addressErr;
        }
        else{
            this.props.onCurrentFormIsValid();
        }
        
    }

    onFirstNameChange = (firstName) => {
        this.setState({ firstName : firstName});
        this.validateInputFields();
    }

    onLastNameChange = (lastName) => {
        this.setState({ lastName : lastName});
        this.validateInputFields();
    }
    onContactNumChange = (contactNumber) => {
        this.setState({ contactNumber : contactNumber});
        this.validateInputFields();
    }
    onAddressChange = (address) => {
        this.setState({ address :address});
        this.validateInputFields();
    }

    showErrorForInvalidForm = () => {
        this.setState({
                firstNameErrMsg     : this.firstNameErrMsg,
                lastNameErrMsg      : this.lastNameErrMsg,
                contactNumberErrMsg : this.contactNumberErrMsg,
                addressErrMsg       : this.addressErrMsg
        });
    }

    render() {
        return (
            <View>
                    <Text style={{paddingLeft:20}}>Your Contact Information</Text>
                    <Text style={{paddingLeft:20}}>Fill in the following details</Text>

                        
                    <Text style={{paddingLeft:20, paddingTop:4}}>Your First Name</Text>
                    <TextInput id="firstName" ref="firstName" onChangeText={this.onFirstNameChange} value={this.state.firstName} />
                    <Text style={{color :'red'}}>{this.state.firstNameErrMsg}</Text>

                    
                    <Text style={{paddingLeft:20,paddingTop:4}}>Your Last Name</Text>
                    <TextInput id="lastName" ref="lastName" onChangeText={this.onLastNameChange} value={this.state.lastName} />
                    <Text style={{color :'red'}}>{this.state.lastNameErrMsg}</Text>

                  
                    <Text style={{paddingLeft:20,paddingTop:4}}>Contact Number</Text>
                    <TextInput id="contactNumber" ref="contactNumber" onChangeText={this.onContactNumChange} value={this.state.contactNumber} />
                    <Text style={{color :'red'}}>{this.state.contactNumberErrMsg}</Text>

                        
                    <Text style={{paddingLeft:20,paddingTop:4, marginBottom:20}}>Address</Text>
                    <TextInput id="address" ref="address" onChangeText={this.onAddressChange} value={this.state.address} />
                    <Text style={{color :'red'}}>{this.state.addressErrMsg}</Text>    
            </View>
        );
    }
}

AppRegistry.registerComponent('UserInputForm', () => UserInputForm);


