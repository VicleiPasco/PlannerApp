import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useRouter } from 'expo-router';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const router = useRouter();

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    alert(`Selected date: ${day.dateString}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => router.back()} color="#FF5703" />
      <Text style={styles.label}>Select a Date</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'maroon',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFDD0',
  },
});
