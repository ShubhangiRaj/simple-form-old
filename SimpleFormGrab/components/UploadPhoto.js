import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button
} from 'react-native';

export default class UploadPhoto extends Component {
    componentWillMount(){
        this.state={
          src : require('../img/uploadIcon.png'),
        };
    }
    openGalleryView = () => {
        // This methods exists to make the code extensible to support choice of photo 
        // selection from a photo gallery in future case.
        // The ideal functionality would open a gallery view and will wait for an image path to 
        // be sent back after the user chooses an image. This image path is then rendered using renderPhoto().

        // currently just calling renderPhoto()
        var imagePath = require('../img/uploadedImage.png') ;
        this.renderPhoto(imagePath);
       
    }
    renderPhoto = (imagePath) => {
         // renderPhoto() uses setState to update the src prop
        this.setState({ src: imagePath});

    }
    render() {
        return (
            <View style={{backgroundColor:'#F7F9FB'}}>
                <Text style={{paddingLeft:20, paddingBottom:10}}>Upload Photo </Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ height:200, width: 320, backgroundColor: '#EAEFF2'}}>
                        <TouchableHighlight underlayColor='rgba(255,255,255,.01)' style={{flex:1, justifyContent: 'center', alignItems: 'center'}} 
                                            onPress={this.openGalleryView}>
                            <Image source={this.state.src} />
                        </TouchableHighlight>
                    </View>
                </View>
                <Text style={{paddingLeft:20,paddingBottom:10}}>Please upload any photo here.</Text>
                

            </View>
        );
        
    }
}

AppRegistry.registerComponent('UploadPhoto', () => UploadPhoto);

