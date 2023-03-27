import React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Dots from "../customButton/Dots";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      DotComponent={Dots}
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("UserRole")}
      pages={[
        {
          backgroundColor: "white",

          image: <Image source={require("../assets/onboard-1.png")} />,
          title: "Easy to find your favorite restaurant",
          subtitle: "Europan lingues es membres del sam familie.",
        },
        {
          backgroundColor: "white",
          image: <Image source={require("../assets/onboard-2.png")} />,
          title: "Easy to multiple order your favorite restaurant",
          subtitle: "Europan lingues es membres del sam familie.",
        },
        {
          backgroundColor: "white",
          image: <Image source={require("../assets/onboard-3.png")} />,
          title: "Fastest delivery only 30 minutes in your favorite food",
          subtitle: "This is the Third slide of the Onboarding Swiper.",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  OnBoardingScreen: {
    flex: 1,
  },
});

export default OnBoardingScreen;
