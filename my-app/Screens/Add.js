import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, ScrollView, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function Add() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (date) {
      setSelectedDate(date);
    }
    hideDatePicker();
  };

  // TODO: Verify that all fields are filled out
  // TODO: Verify that date is not in the future
  // Navigate to home screen
  // Confirmation message to user
  // Add to database
  const handleSubmit = () => {
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.label}>Species</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter species"
        />
        
        <Text style={styles.label}>Quantity</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter quantity"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Area Code</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter area code"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Length</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter length"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Width</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter width"
          keyboardType="numeric"
        />
        
        <Text style={styles.label}>Date</Text>
        <TouchableWithoutFeedback onPress={showDatePicker}>
          <View style={styles.dateInput}>
            <Text>{selectedDate.toDateString()}</Text>
          </View>
        </TouchableWithoutFeedback>

        <Button title="Submit" onPress={() => {}} style={styles.submitButton} />
        
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
  },
  label: {
    fontSize: 16,
    marginHorizontal: 12,
    marginTop: 8,
  },
  dateInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "black",
    margin: 15,
    padding: 15,
    paddingTop: 10,
    alignItems: "center",
  }
});

export default Add;
