import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from '../app/App'
import Home from '../app/src/screens/Home'

AppRegistry.registerComponent('preop-app', () => App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);