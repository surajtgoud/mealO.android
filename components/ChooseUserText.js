import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ChooseUserText = ({ title1, title2 }) => {
  return (
    <View style={styles.chooseUserText}>
      <Text style={styles.text1}>{title1}</Text>
      <Text style={styles.text2}>{title2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseUserText: { position: "relative", top: 230, marginLeft: 25 },
  text1: {
    fontWeight: "600",
    fontSize: 16,
  },
  text2: {
    fontSize: 10,
  },
});

export default ChooseUserText;
