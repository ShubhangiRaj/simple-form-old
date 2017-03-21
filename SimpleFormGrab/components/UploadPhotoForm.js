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

export default class UploadPhotoForm extends Component {

    componentWillMount(){
        this.state={
          src : require('../img/uploadIcon.png'),
          uploadErrMsg: ""
        };
    }

    openGalleryView = () => {
        // This methods exists to make the code extensible to support choice of photo 
        // selection from a photo gallery in future case.
        // The ideal functionality would open a gallery view and will wait for an image path to 
        // be sent back after the user chooses an image. This image path is then rendered using renderPhoto().

        // currently just calling renderPhoto()
        var imagePath = require('../img/uploadedImage.png') ;
        var result    = this.renderPhoto(imagePath);
        return result;
    }

    renderPhoto = (imagePath) => {
        this.setState({ src : imagePath });
        this.props.onCurrentFormIsValid();
    }

    //interface method for parent component to call t
    showErrorForInvalidForm = () => {
      this.setState({uploadErrMsg: "You need to upload a photo"});
    }

    render() {
        return (
            <View style={{backgroundColor :'#F7F9FB'}}>
                <Text style={{paddingLeft :20, paddingBottom:0, paddingTop:20,color:'#363A45',fontSize:16}}>Upload Photo </Text>
                <Text style={{color :'red', paddingLeft:20, color:'#D64425',fontSize:14, paddingBottom:10}}>{this.state.uploadErrMsg}</Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ height:200, width: 320, backgroundColor: '#EAEFF2'}}>
                        <TouchableHighlight underlayColor='rgba(255,255,255,.01)' style={{flex:1, justifyContent: 'center', alignItems: 'center'}} 
                                            onPress={this.openGalleryView}>
                            <Image source={this.state.src}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <Text style={{paddingLeft:20, paddingBottom:10, paddingTop:10, fontSize:12}}>Please upload any photo here.</Text>
            </View>
        );
        
    }
}

AppRegistry.registerComponent('UploadPhotoForm', () => UploadPhotoForm);

