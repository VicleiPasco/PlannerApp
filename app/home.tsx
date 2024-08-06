import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function HomeScreen() {
  const router = useRouter();
 
  return (
<View style={styles.container}>
<Text style={styles.welcomeText}>Welcome to the Study Planner!</Text>
<Button
        title="Go to Planner"
        onPress={() => router.push('/planner')}
      />
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});