import React from 'react';
import { Button, View, Text } from 'react-native';
// navigation prop is passed to the component automatically by the navigator

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to Notifications"
        />
      </View>
    );
  }
export default HomeScreen;
