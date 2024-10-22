import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.top}>Zippi</Text>
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
});
