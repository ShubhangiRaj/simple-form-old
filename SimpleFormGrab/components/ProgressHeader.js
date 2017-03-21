import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Each View is highlighted on successfull event
export default class ProgressHeader extends Component {

    componentWillMount() {
        this.totalForms  = this.props.numberOfForms;
        this.state = { activeFormIndex  : this.props.activeFormIndex };
    }


    incrementActiveIndex(i){
      this.setState( {activeFormIndex  : i} );
    }



    render() {
        var headerArray = [];
          
        for(var i = 1 ; i <= this.totalForms ; i++){
             headerArray.push(i);
        }  

        var headers = headerArray.map((a, i) => {
            return  <View key={i} style={{ backgroundColor: '#f5f5f5', flex:1}}>
                      <Text style={ this.state.activeFormIndex == i ? styles.activeHeader : styles.inactiveHeader } > Step { a } ></Text>
                    </View> 
        });       
        

        return (
            <View style={{ flexDirection: 'row'}}>
               { headers }
            </View>
        );
    }
}

var styles = StyleSheet.create({
    inactiveHeader :{
      color   : '#9B9B9B',
      height  : 50,
      padding : 15,
      borderWidth: 0.5,
      borderColor: '#00B23E', 
      backgroundColor: '#fff'
    },
    activeHeader : {
      color  : '#fff',
      height : 50,
      padding : 15,
      backgroundColor: '#00B23E',
      borderColor: '#fff',
    }
});

    

AppRegistry.registerComponent('ProgressHeader', () => ProgressHeader);

