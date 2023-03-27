import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomInputfield = () => {
  return (
    <View style={styles.actions}>
      <Text style={styles.text}>Email</Text>
      <View style={styles.iconTextInput}>
        <Icon
          name="envelope"
          type="font-awesome"
          size={30}
          style={{ marginRight: 10 }}
          color="#E5E5E5"
        />
        <TextInput
          value=""
          placeholder="Enter Email"
          // onChangeText={onChangeEmail}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  actions: {
    position: "relative",
    marginTop: 5,
    top: 250,
    width: "100%",
    padding: 20,
  },
  text: {
    fontStyle: "normal",
    fontWeight: 400,
    marginBottom: 5,
    lineHeight: 24,
    color: "#252627",
  },
  iconTextInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 5,
  },
});
export default CustomInputfield;
