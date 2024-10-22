import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const WalletScreen = ({}) => {
  const [balance, setBalance] = useState(0);
  const addToBalance = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wallet}>
        <Text style={styles.wallettext}>Saldo</Text>
        {"\n"}
        {balance.toFixed(2)}€
      </Text>
      <Text style={styles.add}>Add saldo</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.box} onPress={() => addToBalance(5)}>
          <Text style={styles.boxText}>5€</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => addToBalance(10)}>
          <Text style={styles.boxText}>10€</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => addToBalance(15)}>
          <Text style={styles.boxText}>15€</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => addToBalance(20)}>
          <Text style={styles.boxText}>20€</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.warning}>
        This is just virtual money to travel playfully from one place to
        another! {"\n"}
        {"\n"}You don't have to pay anything but you don't go anywhere for real!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  add: {
    marginTop: 40,
    marginLeft: 20,
    fontWeight: "bold",
  },
  wallet: {
    marginVertical: 20,
    fontSize: 30,
    backgroundColor: "#2eb00033",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    borderRadius: 12,
    color: "#2eb000",
  },
  wallettext: {
    color: "#000",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 10,
  },
  box: {
    backgroundColor: "#2eb00033",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  boxText: {
    color: "#2eb000",
    fontSize: 18,
    fontWeight: "bold",
  },
  warning: {
    padding: 10,
    borderRadius: 12,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 120,
    color: "#9a9696",
    fontWeight: "400",
  },
});

export default WalletScreen;
