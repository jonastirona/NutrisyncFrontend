import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

// bottom navigation bar
export const BottomNavigation = () => {
  const navigation = useNavigation();

  type ScreenNames = 'home' | 'search' | 'scanner' | 'settings';

  // function to navigate to different screens
  const Navigate = (screen: ScreenNames) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen as never }],
    });
  };

  // return bottom navigation bar
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => Navigate('home')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigate('search')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigate('scanner')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Scanner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigate('settings')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};