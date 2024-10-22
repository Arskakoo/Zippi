import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        {/* <Image 
          source={{ uri: 'https://your-logo-url.com/logo.png' }} // Replace with your logo URL
          style={styles.logo}
        /> */}
        <Text style={styles.logoText}>Zippi</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffff", // Optional: Change background color
  },
  //   logo: {
  //     width: 100, // Adjust the width of the logo
  //     height: 100, // Adjust the height of the logo
  //     resizeMode: 'contain', // Ensures the logo maintains its aspect ratio
  //   },
  logoText: {
    color: "#2eb000",
    fontSize: 42,
    fontWeight: "700",
    marginTop: 10,
  },
});

export default CustomDrawerContent;
