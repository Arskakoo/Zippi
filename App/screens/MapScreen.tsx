import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, FlatList, TouchableOpacity } from "react-native";
import MapView, { UrlTile } from "react-native-maps";
import { TOMTOM_API_KEY } from '@env';
import { LinearGradient } from 'expo-linear-gradient';
import carOptions from '.././carOptions.json'; // Adjust the path to your JSON file

export default function MapScreen() {
  const [selectedCar, setSelectedCar] = useState(null);

  const renderCarItem = ({ item }) => {
    const isSelected = item.id === selectedCar?.id;

    return (
      <TouchableOpacity
        style={[styles.carOption, isSelected ? styles.selectedCar : null]}
        onPress={() => setSelectedCar(item)}
      >
        <LinearGradient
          colors={isSelected ? ['#000', '#000'] : ['#e0e0e0', '#f7f7f7']} // Gradient colors for selected and default states
          start={[0, 0]} // Start gradient from left
          end={[1, 0]} // End gradient to right
          style={styles.gradient}
        >
          <Text style={[styles.carText, isSelected && styles.selectedCarText]}>
            {item.image}
          </Text>
          <Text style={[styles.carText, isSelected && styles.selectedCarText]}>
            {item.type}
          </Text>
          <Text style={[styles.carText, isSelected && styles.selectedCarText]}>
            {item.price}
          </Text>
          <Text style={[styles.carText, isSelected && styles.selectedCarText]}>
            {item.eta}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 61.4978,     // Tampere, Finland
          longitude: 23.7610,    // Tampere, Finland
          latitudeDelta: 0.0922, // Adjust this for zoom level
          longitudeDelta: 0.0421, // Adjust this for zoom level
        }}
      >
        <UrlTile
          urlTemplate={`https://{s}.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=${TOMTOM_API_KEY}`}
          maximumZ={19}
          tileSize={256}
        />
      </MapView>

      <View style={styles.carSelection}>
        <Text style={styles.selectionTitle}>Categories</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={carOptions}
            renderItem={renderCarItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    height: Dimensions.get("window").height,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  carSelection: {
    position: 'absolute',
    bottom: 100, // Adjust as necessary
    padding: 20,
    borderRadius: 5,
    width: '100%', // Width of the selection box
    alignSelf: 'center',
    elevation: 5,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    maxHeight: 270, // Set a maximum height for the FlatList to make it scrollable
  },
  carOption: {
    marginBottom: 10, // Change margin to bottom for vertical spacing
    borderRadius: 20,
    alignItems: 'center',
  },
  gradient: {
    padding: 10,
    borderRadius: 20,
    width: '100%', // Make the gradient fill the entire button
    alignItems: 'center',
  },
  carText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000', // Default text color
  },
  selectedCarText: {
    color: '#fff', // Text color when selected
  },
  selectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
