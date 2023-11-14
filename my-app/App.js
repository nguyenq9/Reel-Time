import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton, MD3Colors } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "./Screens/Map";
import Log from "./Screens/Log";
import Add from "./Screens/Add";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings"
import FAQ from "./Screens/FAQ"
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"

      screenOptions={
        ({ route }) => ({
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            elevation: 0,
            height: 150,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 0,
          },
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "#213c96",
        })
      }
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: () => null,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={30} />
          ),
          headerTransparent: true,
          headerTitle: false,
          headerLeftContainerStyle: {
            height: 80,
            width: 80,
            left: 10,
            top: 30
          },
          headerRightContainerStyle: {
            height: 80,
            width: 80, 
            right: 10,
            top: 30,
          },
          headerTitleStyle: {
            opacity: 0
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <MaterialCommunityIcons 
              name="sync-circle" 
              size={50} 
              margin={10}
              onPress={() => console.log("SYNCING")}
              color={"#213c96"}
              // color={'white'}
              // backgroundColor={'white'}
              />
          ),
          headerRight: () => (
            <MaterialCommunityIcons 
              name="account-circle" 
              size={50} 
              margin={10}
              //onPress={() => console.log("ACCOUNT SETTING")}
              onPress={() => navigation.navigate('Settings')}
              color={"#213c96"}
              // color={'white'}
              // backgroundColor={'white'}
              />
          ),
          
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
        tabBarButton: () => null,
        tabBarVisible: false,
        tabBarStyle: { display: "none" },
        tabBarLabel: "Settings",
        headerLeft: () => (
          <MaterialCommunityIcons 
            name="chevron-triple-left" 
            size={40} 
            margin={5}
            onPress={() => navigation.navigate('Home')}

            />
        ),
        headerRight: () => (
          <MaterialCommunityIcons 
            name="help" 
            size={40} 
            margin={5}
            onPress={() => navigation.navigate('FAQ')}

            />
        ),
      }} 
      />
      <Tab.Screen 
        name="FAQ" 
        component={FAQ} 
        options={{
        tabBarButton: () => null,
        tabBarVisible: false,
        tabBarStyle: { display: "none" },
        tabBarLabel: "FAQ",
        headerLeft: () => (
          <MaterialCommunityIcons 
            name="chevron-triple-left" 
            size={40} 
            margin={5}
            onPress={() => navigation.navigate('Settings')}

            />
        ),
      }} 
      />
      <Tab.Screen
        name="Log"
        component={Log}
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: "Log",
          tabBarLabelStyle: {
            opacity: 0,
          }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={50} />
          ),
          headerLeft: () => (
            <MaterialCommunityIcons 
              name="chevron-triple-left" 
              size={40} 
              margin={5}
              onPress={() => navigation.navigate('Home')}

              />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: "Add",
          tabBarLabelStyle: {
            opacity: 0,
          }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={50} />
          ),
          headerLeft: () => (
            <MaterialCommunityIcons 
              name="chevron-triple-left" 
              size={40} 
              margin={5}
              onPress={() => navigation.navigate('Home')}

              />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: "Map",
          tabBarLabelStyle: {
            opacity: 0,
          }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={50} />
          ),
          headerLeft: () => (
            <MaterialCommunityIcons 
              name="chevron-triple-left" 
              size={40} 
              margin={5}
              onPress={() => navigation.navigate('Home')}

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
