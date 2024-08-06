import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { usePlans } from '../plancontext';
import { useRouter } from 'expo-router';

export default function CalendarScreen() {
  const { plans } = usePlans();
  const router = useRouter();

  // Create marked dates with event details
  const markedDates = plans.reduce((acc, plan) => {
    acc[plan.date] = {
      selected: true,
      marked: true,
      dotColor: 'blue',
      selectedColor: '#FF5703',
    };
    return acc;
  }, {} as { [key: string]: any });

  // Handle date press to show events
  const onDayPress = (day: DateData) => {
    const selectedDate = day.dateString;
    const events = plans.filter(plan => plan.date === selectedDate);
    
    if (events.length > 0) {
      const eventDetails = events.map(event => 
        `Title: ${event.title}\nDescription: ${event.description}\nDate: ${event.date}`
      ).join('\n\n');
      
      Alert.alert(
        'Events',
        eventDetails || 'No events on this date',
        [{ text: 'OK' }],
        { cancelable: true }
      );
    } else {
      Alert.alert('No Events', 'No events on this date', [{ text: 'OK' }], { cancelable: true });
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => router.back()} color="#FF5703" />
      <Text style={styles.label}>Select a Date</Text>
      <Calendar
        markedDates={markedDates}
        onDayPress={onDayPress}
        theme={{
          dayTextColor: '#FFFDD0',
          todayTextColor: '#FF5703',
          selectedDayBackgroundColor: '#FF5703',
          selectedDayTextColor: '#FFFDD0',
          arrowColor: '#FFFDD0',
          monthTextColor: '#FFFDD0',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
          backgroundColor: '#800000',
          calendarBackground: '#800000',
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
