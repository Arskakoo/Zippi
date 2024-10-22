import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.top}>Zippi</Text>
      <Image source={require("./assets/Order.png")} style={styles.image} />
      <Text style={styles.welcome}>Welcome to Zippi</Text>
      <Pressable style={styles.start}>
        <Text style={styles.startText}>Lets Ride</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  top: {
    color: "#000000",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    padding: 6,
  },
  welcome: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
  },
  image: {
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
    width: 400,
    height: 400,
    padding: 20,
    marginVertical: 50,
  },
  start: {
    backgroundColor: "#2eb000",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 12,
    marginTop: 20,
  },
  startText: {
    fontSize: 25,
    color: "#ffff",
    fontWeight: "bold",
  },
});
