import * as React from "react";
import { Text, View, TextInput, SafeAreaView, StyleSheet } from "react-native";

function Add() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [date, onChangeDate] = React.useState("");

  return (
    <View
    // style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDate}
          value={date}
          placeholder="Quantity"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Species"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Quantity"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
  },
});

export default Add;
