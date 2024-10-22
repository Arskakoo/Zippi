import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CustomDrawerContent from "./CustomDrawerContent"; // Import the custom drawer content

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
