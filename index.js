/** @format */

import {Navigation} from "react-native-navigation";
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import Quiz from './Screens/Quiz';
import Quiz2 from './Screens/Quiz2';
import Quiz3 from './Screens/Quiz3';
import Quiz4 from './Screens/Quiz4';
import Result from './Screens/Result';
import Drawer from './Screens/Drawer';


Navigation.registerComponent("Welcome", () => Welcome);
Navigation.registerComponent("Home", () => Home);
Navigation.registerComponent("Quiz", () => Quiz);
Navigation.registerComponent("Quiz2", () => Quiz2);
Navigation.registerComponent("Quiz3", () => Quiz3);
Navigation.registerComponent("Quiz4", () => Quiz4);
Navigation.registerComponent("Result", () =>Result);
Navigation.registerComponent("Drawer", () => Drawer);

Navigation.events().registerAppLaunchedListener(() => {
 /* Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: false,
      drawBehind: true,
      animate: false,
      buttonColor: 'white',
      title: {
        color: 'black',
        alignment: 'center'
      },
      background: {
      color: 'transparent'
      }
  }
});*/
Navigation.setRoot({
  root: {
    sideMenu: {
      left: {
        component: {
           id: 'drawerId',
           name: 'Drawer',
        }
      },
    center: {
      stack: {
          id: 'AppStack',
          children: [
            {
              component: {
                name: 'Home',
                options:{
                  topBar: {
                    title: {text: 'Home Page'}
                  }
                }
              }
            }
          ],
      id: 'Test',
      }
    }
    },
  }
});
});

/*Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack:{
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'Home',
              options:{
                topBar: {
                  title: 'Home Page'
                }
              }
            }
          }
        ]
      }
    }
  });
});*/
