import React from 'react';
import { Button, View, Text } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Notifications Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go Back Home" />
    </View>
  );
};

export default NotificationsScreen;
