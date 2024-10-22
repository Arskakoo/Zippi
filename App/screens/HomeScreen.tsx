import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Order.png")} style={styles.image} />
      <Text style={styles.welcome}>
        It's time to take <Text style={styles.green}>Ride</Text>
      </Text>
      <Pressable style={styles.start}>
        <Text style={styles.startText}>Let's Ride</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
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
  green: {
    color: "#2eb000",
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
