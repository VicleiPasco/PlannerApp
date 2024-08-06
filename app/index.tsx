import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Study Planner App</Text>
      <Button title="Go to Planner" onPress={() => router.push('/planner')} />
      <Button title="Go to Calendar" onPress={() => router.push('/calendar')} />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFDD0',
  },
});
