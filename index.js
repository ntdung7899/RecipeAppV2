/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigatorScreen from './components/src/screen/NavigatorScreen'
AppRegistry.registerComponent(appName, () => NavigatorScreen);
