import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ImageComponent from "../components/ImageComponent";
import ChooseUserText from "../components/ChooseUserText";
import CustomButtonField from "../components/CustomButtonField";
import OtpInput from "../components/OtpInputComponent";
import { verifyOTP } from "../services/webservices";

const OtpVerificationScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleSubmitButton = async () => {
    const { phoneNumber } = route.params;
    const result = await verifyOTP(phoneNumber, otp);
    console.log(result);
  };
  let selectedButton = false;
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <ImageComponent />
      <ChooseUserText
        title1="Verification Code"
        title2="Please enter the verification code sent to in your mobile"
      />
      <View style={styles.actions}>
        <OtpInput length={6} onComplete={handleOtpChange} />
      </View>
      <View style={styles.actions2}>
        <CustomButtonField
          name="Submit"
          isSelected={!selectedButton}
          onPress={handleSubmitButton}
        />
        <View style={styles.sendagain}>
          <Text style={{ textAlign: "center", fontSize: 13 }}>
            Didn't received yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                textAlign: "center",
                color: "#F1592A",
                paddingLeft: 5,
                fontSize: 13,
              }}
            >
              Send again
            </Text>
          </TouchableOpacity>
        </View>
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
    top: 220,
    width: "100%",
    padding: 20,
  },
  actions2: {
    position: "relative",
    marginTop: 5,
    top: 170,
    width: "100%",
    padding: 20,
  },
  sendagain: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
});

export default OtpVerificationScreen;
