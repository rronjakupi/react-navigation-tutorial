import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HelpScreen from "../screens/HelpScreen";

export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
        )
      }
    },
    Links: {
      screen: LinksScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-link" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "dodgerblue",
      inactiveTintColor: "#CECECE",
      showLabel: false,
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "whitesmoke",
        height: 50,
        justifyContent: "center",
        paddingVertical: 5
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home: TabNavigator,
  Help: HelpScreen
});

const AppContainer = createAppContainer(DrawerNavigator);
