import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import ImageComponent from "../components/ImageComponent";
import ChooseUserText from "../components/ChooseUserText";
import CustomButtonField from "../components/CustomButtonField";

const UserRoleSelectionScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (name) => {
    setSelectedButton(name);
  };
  const handleCreateAccount = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <ImageComponent />
      <ChooseUserText
        title1="Create Account"
        title2="Please choose your role"
      />
      <View style={styles.actions}>
        <CustomButtonField
          name="I’m a Customer"
          isSelected={selectedButton === "I’m a Customer"}
          onPress={() => handleButtonPress("I’m a Customer")}
        />
        <CustomButtonField
          name="I’m a Restraunt"
          isSelected={selectedButton === "I’m a Restraunt"}
          onPress={() => handleButtonPress("I’m a Restraunt")}
        />
        <CustomButtonField
          name="I’m a Delivery Agent"
          isSelected={selectedButton === "I’m a Delivery Agent"}
          onPress={() => handleButtonPress("I’m a Delivery Agent")}
        />
      </View>
      <View style={styles.actions2}>
        <CustomButtonField
          name="Create Account"
          isSelected={!!selectedButton}
          onPress={handleCreateAccount}
        />
      </View>
      <View style={styles.textaction}>
        <Text style={styles.text}>Already have an account</Text>
        <Text style={styles.textRed}>Login now</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    marginLeft: 10,
  },
  actions: {
    position: "relative",
    marginTop: 5,
    top: 250,
    width: "100%",
    padding: 20,
  },
  actions2: {
    position: "relative",
    marginTop: 5,
    top: 290,
    width: "100%",
    padding: 20,
  },
  textRed: { color: "red", paddingLeft: 5 },
  textaction: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    marginLeft: 10,
    marginTop: 10,
    top: 250,
    width: "100%",
    padding: 20,
  },
});
export default UserRoleSelectionScreen;
