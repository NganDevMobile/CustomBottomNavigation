import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from '../assets';
import {routes} from './routes';
import HomeScreen from '../screens/Bottom/HomeScreen';
import CartScreen from '../screens/Bottom/CartScreen';
import ProductScreen from '../screens/Bottom/ProductScreen';
import NotificationScreen from '../screens/Bottom/NotificationScreen';
import AccountScreen from '../screens/Bottom/AccountScreen';
const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
  <View
    style={{
      backgroundColor: '#fff',
      width: 70,
      height: 70,
      top: -30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 35,
    }}>
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 35,
          backgroundColor: '#F99837',
          shadowColor: '#000',
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 1,
          shadowOffset: {
            width: 0,
            height: 4,
          },
        }}>
        {children}
      </View>
    </TouchableOpacity>
  </View>
);

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#F58515' : '#3F3F3F',
                }}
              />
              <Text style={{color: focused ? '#F58515' : '#3F3F3F'}}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={routes.PRODUCT_SCREEN}
        component={ProductScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.product}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#F58515' : '#3F3F3F',
                }}
              />
              <Text style={{color: focused ? '#F58515' : '#3F3F3F'}}>
                Sản phẩm
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={routes.CART_SCREEN}
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff',
                }}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.notification}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#F58515' : '#3F3F3F',
                }}
              />
              <Text style={{color: focused ? '#F58515' : '#3F3F3F'}}>
                Thông báo
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.account}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#F58515' : '#3F3F3F',
                }}
              />
              <Text style={{color: focused ? '#F58515' : '#3F3F3F'}}>
                Tài khoản
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
