import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OtpInput = ({ length, onComplete }) => {
  const [otp, setOtp] = useState("");
  const inputs = useRef([]);

  const focusNext = (index, value) => {
    const nextIndex = index + 1;
    if (nextIndex < length) {
      inputs.current[nextIndex].focus();
    }

    const newOtp = otp.substr(0, index) + value + otp.substr(index + 1);
    setOtp(newOtp);

    if (newOtp.length === length) {
      onComplete(newOtp);
    }
  };

  const handleKeyPress = (index, value) => {
    const regex = /^[0-9]+$/;
    if (value !== "" && !regex.test(value)) {
      return;
    }

    if (value === "") {
      const newOtp = otp.substr(0, index - 1) + otp.substr(index);
      setOtp(newOtp);
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    } else {
      focusNext(index, value);
    }
  };

  const renderInputs = () => {
    const inputArray = [];

    for (let i = 0; i < length; i++) {
      inputArray.push(
        <TextInput
          key={i}
          ref={(ref) => (inputs.current[i] = ref)}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleKeyPress(i, value)}
          value={otp[i] ? otp[i].toString() : ""}
        />
      );
    }

    return inputArray;
  };

  return <View style={styles.container}>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    width: 40,
    height: 40,
    margin: 5,
    fontSize: 20,
  },
});

export default OtpInput;
