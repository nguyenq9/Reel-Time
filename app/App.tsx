import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Screens/Home';
import Log from './Screens/Log';
import Add from './Screens/Add';
import Settings from './Screens/Settings';
import FAQ from './Screens/FAQ';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Map from './Screens/Map';
import Realm from 'realm';

import { useEffect, useState } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {Platform, NativeModules} from 'react-native';
import { UserState } from 'realm-web';
const {StatusBarManager} = NativeModules;

function MapScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>🚧Temporary🚧Map🚧Screen🚧</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
          height: 150,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          // fontSize: 0,
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#213c96',
      })}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'Login',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarButton: () => null,
          // tabBarVisible: false,
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'Signup',
          tabBarLabelStyle: {
            opacity: 0,
          },
          headerLeft: () => (
            <Icon
              name="chevron-circle-left"
              size={40}
              style={{marginLeft: 10, color: 'black'}}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            opacity: 0,
          },
          tabBarButton: () => null,
          tabBarLabelStyle: {
            opacity: 0,
          },
          // headerTransparent: true,
          // headerTitle: false,
          headerLeftContainerStyle: {
            height: 80,
            width: 80,
            left: 10,
            top: 30,
          },
          headerRightContainerStyle: {
            height: 80,
            width: 80,
            right: 10,
            top: 30,
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon
              name="user-circle-o"
              size={50}
              style={{marginRight: 10, color: 'white'}}
              onPress={() => {
                navigation.navigate('Settings');
                console.log('LOOO');
              }}
            />
          ),
          headerLeft: () => (
            <Icon
              name="cloud-upload"
              size={50}
              style={{marginLeft: 10, color: 'white'}}
              onPress={() => {
                // DO SYNCING
                console.log('SYNCING');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarButton: () => null,
          // tabBarVisible: false,
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'Settings',
          headerLeft: () => (
            <Icon
              name="chevron-circle-left"
              size={40}
              style={{marginLeft: 10, color: 'black'}}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          ),
          headerRight: () => (
            <Icon
              name="question"
              size={50}
              style={{marginRight: 10, color: 'black'}}
              onPress={() => {
                navigation.navigate('FAQ');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          tabBarButton: () => null,
          // tabBarVisible: false,
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'FAQ',
          headerLeft: () => (
            <Icon
              name="chevron-circle-left"
              size={40}
              style={{marginLeft: 10, color: 'black'}}
              onPress={() => {
                navigation.navigate('Settings');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Log"
        component={Log}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabelStyle: {
            opacity: 0,
          },
          tabBarIcon: ({color}) => <Icon name="list" size={45} color={color} />,
          headerLeft: () => (
            <Icon
              name="chevron-circle-left"
              size={40}
              style={{marginLeft: 10, color: 'black'}}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabelStyle: {
            opacity: 0,
          },
          tabBarIcon: ({color}) => (
            <Icon name="plus-square" size={48} color={color} />
          ),
          headerLeft: () => (
            <Icon
              name="chevron-circle-left"
              size={40}
              style={{marginLeft: 10, color: 'black'}}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabelStyle: {
            opacity: 0,
          },
          tabBarIcon: ({color}) => <Icon name="map" size={40} color={color} />,
          headerLeft: () => (
            <Icon
              name="chevron-circle-left"
              size={40}
              style={{marginLeft: 10, color: 'black'}}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
