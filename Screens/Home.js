import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Welcome from './Welcome';
import Animbutton from '../Components/Animbutton';


export default class Home extends Component{

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
        component: {
            name: screenName
        }
    })
  }
  
render() {
  return (
    <View style={styles.container}>
        <Welcome pagekey={"uniquekey"} title={"Regulations"} description={"1. Just enjoy the game :)"}/>

          <Animbutton onColor={"#3366ff"} effect={"tada"} text="Quiz 1"  _onPress={()=> this.goToScreen('Quiz')} />
          <Animbutton onColor={"#3366ff"} effect={"tada"} text="Quiz 2"  _onPress={()=> this.goToScreen('Quiz2')} />
          <Animbutton onColor={"#3366ff"} effect={"tada"} text="Quiz 3"  _onPress={()=> this.goToScreen('Quiz3')} />
          <Animbutton onColor={"#3366ff"} effect={"tada"} text="Quiz 4"  _onPress={()=> this.goToScreen('Quiz4')} />
          <Animbutton onColor={"#3366ff"} effect={"tada"} text="Go to Result"  _onPress={()=> this.goToScreen('Result')} />
          </View>
          );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBF00',
    fontFamily: "Oswald-Regular"
  }
});
