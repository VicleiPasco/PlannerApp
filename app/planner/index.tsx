import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router'; // Assuming you have this installed
 
export default function PlannerScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [plans, setPlans] = useState([]);
  const router = useRouter();
 
  const handleSubmit = () => {
    // Add the new plan to the list
    setPlans([...plans, { title, description, date }]);
    // Reset the form
    setTitle('');
    setDescription('');
    setDate('');
  };
 
  const renderItem = ({ item }: any) => (
<View style={styles.tableRow}>
<Text style={styles.tableCell}>{item.title}</Text>
<Text style={styles.tableCell}>{item.description}</Text>
<Text style={styles.tableCell}>{item.date}</Text>
</View>
  );
 
  return (
<View style={styles.container}>
<Text style={styles.label}>Title</Text>
<TextInput 
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        placeholderTextColor="cream"
      />
<Text style={styles.label}>Description</Text>
<TextInput 
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        placeholderTextColor="cream"
      />
<Text style={styles.label}>Date</Text>
<TextInput 
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter date"
        placeholderTextColor="cream"
      />
<Button title="Save Plan" onPress={handleSubmit} />
<Button title="Go to Calendar" onPress={() => router.push('/calendar')} />
 
      <View style={styles.tableContainer}>
<View style={styles.tableHeader}>
<Text style={styles.tableHeaderText}>Title</Text>
<Text style={styles.tableHeaderText}>Description</Text>
<Text style={styles.tableHeaderText}>Date</Text>
</View>
<FlatList
          data={plans}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
</View>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'maroon',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: 'cream',
  },
  input: {
    height: 40,
    borderColor: 'cream',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: 'cream',
  },
  tableContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'cream',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'cream',
    paddingBottom: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 16,
    color: 'cream',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'cream',
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    color: 'cream',
  },
});