import { View, Image, StyleSheet } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Image
        style={styles.pizzaImage}
        source={require("../assets/pizza-custom1.png")}
      />
      <Image
        style={styles.logoImage}
        source={require("../assets/MealO-Logo.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  pizzaImage: {
    position: "absolute",
    resizeMode: "contain",
    width: 300,
    height: 280,
    left: 155,
    top: -125,
  },
  logoImage: {
    position: "absolute",
    width: 183,
    height: 66,
    left: 22,
    top: 150,
  },
});
export default ImageComponent;
