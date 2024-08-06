
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function PlannerScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    alert(`Plan saved! Title: ${title}, Description: ${description}, Date: ${date}`);
    setTitle('');
    setDescription('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput 
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        placeholderTextColor="#FFFDD0"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput 
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        placeholderTextColor="#FFFDD0"
      />
      <Text style={styles.label}>Date</Text>
      <TextInput 
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter date"
        placeholderTextColor="#FFFDD0"
      />
      <Button title="Save Plan" onPress={handleSubmit} />
      <Button title="Go to Calendar" onPress={() => router.push('/calendar')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#800000', // Maroon background
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#FFFDD0', // Cream text
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#FFFDD0', // Cream text
  },
});
