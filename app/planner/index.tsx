import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function PlannerScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [plans, setPlans] = useState([]);
  const router = useRouter();
 
  const handleSubmit = () => {
    setPlans([...plans, { title, description, date }]);
    setTitle('');
    setDescription('');
    setDate('');
  };
 
  const handleDelete = (index: number) => {
    setPlans(plans.filter((_, i) => i !== index));
  };
 
  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.title}</Text>
      <Text style={styles.tableCell}>{item.description}</Text>
      <Text style={styles.tableCell}>{item.date}</Text>
      <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
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
 
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Title</Text>
          <Text style={styles.tableHeaderText}>Description</Text>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Actions</Text>
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
    color: '#FFFDD0',
  },
  input: {
    height: 40,
    borderColor: '#FFFDD0',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#FFFDD0',
  },
  tableContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#FFFDD0',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFDD0',
    paddingBottom: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 16,
    color: '#FFFDD0',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFDD0',
    paddingVertical: 10,
    alignItems: 'center',
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    color: '#FFFDD0',
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#FFF',
  },
});
 