import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MapScreen from "./screens/MapScreen";
import CustomDrawerContent from "./CustomDrawerContent"; // Import the custom drawer content

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack navigator for Home-related screens
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Start"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }} // Hide header for MapScreen
      />
    </Stack.Navigator>
  );
}

// Main App component with drawer and nested stacks
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Ride" component={HomeStack} />
        <Drawer.Screen name="Wallet" component={NotificationsScreen} />
        <Drawer.Screen name="History" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
