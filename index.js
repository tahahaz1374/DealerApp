/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Login from './app/screens/Login';
// import SelectDealer from './app/screens/SelectDealer';

import {name as appName} from './app.json';
// import AddDealer from './app/screens/AddDealer';
import Car from './app/screens/Car';

AppRegistry.registerComponent(appName, () => Car);
