import { StyleSheet } from "react-native";
// import MainLoginScreen from "./screens/MainLoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import Frame1 from "./screens/Frame1";
import UserRoleSelectionScreen from "./screens/UserRoleSelectionScreen";
import PhoneVerification from "./screens/PhoneVerification";
import OtpVerificationScreen from "./screens/OtpVerificationScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          screenOptions={{ headerShown: false }}
          component={Frame1}
        />
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
        <Stack.Screen name="UserRole" component={UserRoleSelectionScreen} />
        <Stack.Screen name="SignIn" component={PhoneVerification} />
        <Stack.Screen name="Otp" component={OtpVerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
