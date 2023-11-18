import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";

function Add({navigation}) {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  const [areaCode, onChangeCode] = useState("");
  const [length, onChangeLength] = useState("");
  const [weight, onChangeWeight] = useState("");
  const [date, onChangeDate] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [speciesError, setSpeciesError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [areaCodeError, setAreaCodeError] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    if (date || date.trim() === '') {
      console.log("Error: ", date);
      setErrorMessage('Please enter a valid date.');
    }
    hideDatePicker();
  };

  const isValidDate = (dateStr) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
    return regex.test(dateStr);
  };

  // TODO: Verify that all fields are filled out
  // TODO: Verify that date is not in the future
  // Navigate to home screen
  // Confirmation message to user
  // Add to database
  const handleSubmit = (date, species, quantity, areaCode, navigation) => {
    let valid = true;
    console.log("Date: ", date);
    if (!date || date.trim() === '') {
      console.log("Error: ", date);
      setErrorMessage('Please enter a valid date.');
      valid = false;
    } else if (!isValidDate(date.trim())) {
      setErrorMessage('Invalid date. Please use the format mm/dd/yyyy.');
      valid = false;
    } else {
      setErrorMessage(''); // Clear the error message
    }

    if (!species || species.trim() === '') {
      setSpeciesError('Please enter a valid species.');
      valid = false;
    } else {
      setSpeciesError('');
    }

    if (!quantity || quantity.trim() === '') {
      setQuantityError('Please enter a valid quantity.');
      valid = false;
    } else {
      setQuantityError('');
    }

    if (!areaCode || areaCode.trim() === '') {
      setAreaCodeError('Please enter a valid area code.');
      valid = false;
    } else {
      setAreaCodeError('');
    }

    // TODO: Add to database
    if (valid) {
      // Navigate to Home screen
      onChangeText(''); // Clears species
      onChangeNumber(''); // Clears quantity
      onChangeCode(''); // Clears area code
      onChangeDate(''); // Clears date
      onChangeLength(''); // Assuming you want to clear length as well
      onChangeWeight(''); // Assuming you want to clear weight as well
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
    >
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.label}>Species *</Text>
        {speciesError.length > 0 && (
          <Text style={styles.errorText}>{speciesError}</Text>
        )}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter species"
        />

        <Text style={styles.label}>Quantity *</Text>
        {quantityError.length > 0 && (
          <Text style={styles.errorText}>{quantityError}</Text>
        )}
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter quantity"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Area Code *</Text>
        {areaCodeError.length > 0 && (
          <Text style={styles.errorText}>{areaCodeError}</Text>
        )}
        <TextInput
          style={styles.input}
          onChangeText={onChangeCode}
          value={areaCode}
          placeholder="Enter area code"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Length</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLength}
          value={length}
          placeholder="Enter length"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeWeight}
          value={weight}
          placeholder="Enter width"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Date *</Text>
        {errorMessage.length > 0 && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}
        <TextInput
          style={styles.input}
          onChangeText={onChangeDate}
          value={date}
          placeholder="mm/dd/yyyy"
        />

        {/* <Text style={styles.label}>Date</Text>
        <TouchableWithoutFeedback onPress={showDatePicker}>
          <View style={styles.dateInput}>
            <Text>{selectedDate}</Text>
          </View>
        </TouchableWithoutFeedback>
        <DatePicker
              mode="datepicker"
              style={
                isDatePickerVisible ? datepickerstyle : datepickerstylecollapsed
              }
              onDateChange={(date) => {
                setSelectedDate(date);
                hideDatePicker();
              }}
            /> */}
      </View>
      <Button title="Submit" onPress={() => handleSubmit(date, text, number, areaCode, navigation)} style={styles.submitButton} /> 
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const datepickerstyle = StyleSheet.create({
  height: 400,
});

const datepickerstylecollapsed = StyleSheet.create({
  height: 0,
});

const styles = StyleSheet.create({
  container: {
    flex: 50,
    height: 150,
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
    backgroundColor: "red",
    margin: 15,
    padding: 15,
    paddingTop: 10,
    width: 10,
    alignItems: "center",
  },
  errorText: {
    color: 'red',
    marginHorizontal: 12,
    marginTop: 7,
    // other styling such as margin, font size etc.
  },
});

export default Add;
