import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function HomeScreen() {
  const router = useRouter();
 
  const goToPlanner = () => {
    router.push('/planner');
  };
 
  const goToCalendar = () => {
    router.push('/calendar');
  };
 
  return (
<View style={styles.container}>
<Text style={styles.title}>Welcome to the Study Planner App</Text>
<Button title="Go to Planner" onPress={goToPlanner} />
<Button title="Go to Calendar" onPress={goToCalendar} />
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800000', // Maroon background
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFDD0', // Cream text
  },
});