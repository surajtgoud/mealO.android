import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Frame1 = ({ navigation }) => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    async function checkFirstTimeUser() {
      try {
        const value = await AsyncStorage.getItem("hasOpenedApp");
        if (value === null) {
          // User has not opened the app before, set the flag and show onboarding
          await AsyncStorage.setItem("hasOpenedApp", "true");
          setShowOnboarding(true);
        } else {
          // User has opened the app before, navigate to sign in
          navigation.navigate("UserRole");
        }
      } catch (error) {
        console.log("Error checking first time user: ", error);
      }
    }

    // Wait for 2 seconds before showing onboarding or navigating to sign in
    setTimeout(() => {
      checkFirstTimeUser();
    }, 2000);
  }, []);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        // onPress={() => setShowOnboarding(true)}
      >
        <Image source={require("../assets/white1.png")} />
      </TouchableOpacity>
      {showOnboarding && navigation.navigate("Onboarding")}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#80C241",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Frame1;
