import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/image.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to the Study Planner App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go to Planner" onPress={() => router.push('/planner')} color="#FF5703" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Calendar" onPress={() => router.push('/calendar')} color="#FF5703" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#800000',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFDD0',
  },
  buttonContainer: {
    marginBottom: 10,
    width: '80%',
  },
});

