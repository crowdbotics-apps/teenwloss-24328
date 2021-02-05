import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList201375Navigator from '../features/ArticleList201375/navigator';
import Maps201362Navigator from '../features/Maps201362/navigator';
import ArticleList201354Navigator from '../features/ArticleList201354/navigator';
import Maps201341Navigator from '../features/Maps201341/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList201375: { screen: ArticleList201375Navigator },
Maps201362: { screen: Maps201362Navigator },
ArticleList201354: { screen: ArticleList201354Navigator },
Maps201341: { screen: Maps201341Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
