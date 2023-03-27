import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import ImageComponent from "../components/ImageComponent";
import ChooseUserText from "../components/ChooseUserText";
import CustomButtonField from "../components/CustomButtonField";
import CountryPicker from "react-native-country-picker-modal";
import { sendOTP } from "../services/webservices";

const PhoneVerification = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const [countryNumCode, setCountryNumCode] = useState("");
  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
    setCountryNumCode(country.callingCode[0]);
    setCountryModalVisible(false);
  };

  const handleLoginButton = async () => {
    try {
      const result = await sendOTP(phoneNumber);
      console.log(result.status);
      if (result.status === "Success") {
        navigation.navigate("Otp", { phoneNumber: phoneNumber });
      }
    } catch (error) {
      console.error(error);
    }
  };

  let selectedButton = false;
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <ImageComponent />
      <ChooseUserText
        title1="Login"
        title2="Enter your mobile number to proceed"
      />

      <View style={styles.actions}>
        <Text style={styles.title}>Enter Mobile Number</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.countrySelector}
            onPress={() => setCountryModalVisible(true)}
          >
            <Image
              style={styles.countryFlag}
              source={{
                uri: `https://www.countryflags.io/${countryCode}/flat/64.png`,
              }}
            />
            <CountryPicker
              withFilter
              withAlphaFilter
              withCallingCode
              visible={countryModalVisible}
              onSelect={handleCountrySelect}
              onClose={() => setCountryModalVisible(false)}
              countryCode={countryCode}
              translation="common"
            />
          </TouchableOpacity>
          <TextInput
            style={styles.phoneNumberInput}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            placeholder="201-555-0123"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.actions2}>
        <CustomButtonField
          name="Login"
          isSelected={!selectedButton}
          onPress={handleLoginButton}
        />
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
  title: { marginBottom: 5, fontWeight: "bold", marginLeft: 2 },

  actions2: {
    position: "relative",
    marginTop: 5,
    top: 170,
    width: "100%",
    padding: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 10,
    marginLeft: 2,
  },
  countrySelector: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  countryFlag: {
    width: 24,
    height: 24,
    marginRight: -25,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});

export default PhoneVerification;
