import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Home from './Home'
export default class Drawer extends Component{
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: Home,
})


