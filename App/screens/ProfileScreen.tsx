import React from 'react';
import { Button, View, Text } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Profile Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
    </View>
  );
};

export default ProfileScreen;
