import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, TouchableHighlight, Image, NativeModules } from 'react-native';
import { ActionCreators } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import React, { Component } from 'react';

import { ApiManager } from '../ApiManager'

var AAManager = NativeModules.AAManager;

function mapStateToProps(state) {
  return {
    sources: state.sources,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


class ListScene extends React.Component {
  static navigationOptions = {
    title: 'List'
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {

    AAManager.displayToast("HBVHVSAdhjds");
    AAManager.SensorList(
     (filterMap) => {
       console.log("Sensors--"+filterMap);

     });

    // ApiManager.SouceAPI().then((responseJson) =>{
    //   // console.log(JSON.stringify(responseJson));
    //   this.props.set_sources(responseJson)
    //
    // });
  }

render(){
  return(
    <View>
    <Text > GuruPrasath </Text>
    </View>
  )
}

}
export default connect(mapStateToProps, mapDispatchToProps)(ListScene);
