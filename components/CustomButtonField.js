import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const CustomInputfield = ({ name, isSelected, onPress }) => {
  let backgroundColor = isSelected ? "#F1592A" : "#E5E5E5";
  const textColor = isSelected ? "white" : "black";
  if (name === "Create Account" || name === "Login" || name === "Submit") {
    backgroundColor = isSelected ? "#80C241" : "#E5E5E5";
  }
  return (
    <View style={styles.action}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.LoginButtonText, { color: textColor }]}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  action: {
    marginTop: 20,
    width: "100%",
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  LoginButtonText: {
    color: "black",
    fontWeight: 700,
  },
});

export default CustomInputfield;
