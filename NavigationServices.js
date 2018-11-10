import { NavigationActions } from 'react-navigation';
import HomeLayout from './Components/Home';
import HeroesScreen from './Components/Heroes';
import SettingsScreen from './Components/Settings';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName : 'HeroesScreen',
      params,
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};