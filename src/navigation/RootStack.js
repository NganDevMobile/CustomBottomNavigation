import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './routes';
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        initialRouteName={routes.BOTTOM_TAB}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.BOTTOM_TAB} component={BottomTab} />
        {/* <Stack.Screen
          name={routes.NOTIFICATION_DETAIL}
          component={common.NOTIFICATION_DETAILS}
        />
        <Stack.Screen
          name={routes.NEWS_DETAIL_SCREEN}
          component={common.NEWS_DETAILS_SCREEN}
        />
        <Stack.Screen
          name={routes.TERM_OF_USE_SCREEN}
          component={common.TERM_OF_USER_SCREEN}
        />
        <Stack.Screen
          name={routes.ALL_NEWS_SCREEN}
          component={common.ALL_NEWS_SCREEN}
        />
        <Stack.Screen
          name={routes.VIDEO_DETAILS}
          component={common.VIDEO_DETAILS}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
