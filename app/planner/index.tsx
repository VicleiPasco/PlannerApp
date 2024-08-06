import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Pressable, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PlannerScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState('');
  const [plans, setPlans] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    // Generate a unique ID for each plan
    const newPlan = { id: Math.random().toString(), title, description, date: dateString };
    // Add the new plan to the list
    setPlans([...plans, newPlan]);
    // Reset the form
    setTitle('');
    setDescription('');
    setDate(new Date());
    setDateString('');
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDateString(currentDate.toDateString());
  };

  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete Plan',
      'Are you sure you want to delete this plan?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => setPlans(plans.filter(plan => plan.id !== id)) },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.title}</Text>
      <Text style={styles.tableCell}>{item.description}</Text>
      <Text style={styles.tableCell}>{item.date}</Text>
      <Pressable onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => router.back()} color="#FF5703" />
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
      <Pressable onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>{dateString || 'Select date'}</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Button title="Save Plan" onPress={handleSubmit} color="#FF5703" />
      <Button title="Go to Calendar" onPress={() => router.push('/calendar')} color="#FF5703" />

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
          keyExtractor={item => item.id}
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
  datePickerButton: {
    height: 40,
    borderColor: '#FFFDD0',
    borderWidth: 1,
    marginBottom: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  datePickerText: {
    color: '#FFFDD0',
    fontSize: 16,
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
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    color: '#FFFDD0',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
