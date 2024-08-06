
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = day => {
    setSelectedDate(day.dateString);
    alert(`Selected date: ${day.dateString}`);
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: '#800000', // Maroon background
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFDD0', // Cream text
  },
});
