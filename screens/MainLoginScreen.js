import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Switch,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageComponent from "../components/ImageComponent";

const MainLoginscreen = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.MainLoginContainer}>
      <ImageComponent />
      <View style={styles.formContainer}>
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
            value={Email}
            placeholder="Enter Email"
            onChangeText={onChangeEmail}
          />
        </View>

        <Text style={styles.text}>Password</Text>
        <View style={styles.iconTextInput}>
          <Icon
            name="lock"
            type="font-awesome"
            style={{ marginRight: 10 }}
            size={30}
            color="#E5E5E5"
          />
          <TextInput
            placeholder="Enter Password"
            style={{ paddingRight: 124 }}
            value={Password}
            onChangeText={onChangePassword}
          />

          <Icon
            name="eye"
            type="font-awesome"
            style={{ paddingLeft: 12 }}
            size={30}
            color="#E5E5E5"
          />
        </View>

        <View style={styles.action1}>
          <Switch
            trackColor={{ false: "#FFFFFF", true: "#FFFFFF" }}
            thumbColor="#80C241"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
              <Text style={{ paddingTop: 15, paddingRight: 45 }}>
                Remember me
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
              <Text style={{ paddingTop: 15, paddingLeft: 15, color: "red" }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.action2}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Frame")}
            style={styles.LoginButton}
          >
            <Text style={styles.LoginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            or Login With
          </Text>
          <View style={styles.socialButtons}>
            <View style={styles.roundBorder}>
              <Icon
                name="phone"
                type="font-awesome"
                size={30}
                color="#3B5998"
                style={{ textAlign: "center" }}
              />
            </View>
            <View style={styles.roundBorder}>
              <Icon
                name="google"
                type="font-awesome"
                size={30}
                color="#DB4437"
                style={{ textAlign: "center" }}
              />
            </View>

            <View style={styles.roundBorder}>
              <Icon
                name="instagram"
                type="font-awesome"
                size={30}
                color="#E1306C"
                style={{ textAlign: "center" }}
              />
            </View>

            <View style={styles.roundBorder}>
              <Icon
                name="facebook"
                type="font-awesome"
                size={30}
                color="#3B5998"
                style={{ textAlign: "center" }}
              />
            </View>

            <View style={styles.roundBorder}>
              <Icon
                name="apple"
                type="font-awesome"
                size={30}
                color="#000000"
                style={{ textAlign: "center" }}
              />
            </View>
          </View>
          <View>
            <Text style={{ textAlign: "center", color: "red", fontSize: 13 }}>
              I'll log in later
            </Text>
            <Text style={{ textAlign: "center", fontSize: 13 }}>
              Don't have an account? Please
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ textAlign: "center", color: "red", fontSize: 13 }}>
                Create Account
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
              }}
            >
              by logging in you agree to MealO Terms of Service. Privacy Policy
              and Content Policies.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainLoginContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontStyle: "normal",
    fontWeight: 400,
    marginBottom: 5,
    lineHeight: 24,
    color: "#252627",
  },
  formContainer: {
    position: "relative",
    marginTop: 5,
    top: 210,
    width: 354,
    marginLeft: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  action1: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  action2: {
    justifyContent: "center",
    width: "100%",
  },
  loginContainer: {
    borderTopColor: "#CCCCCC",
    borderTopWidth: 1,
    marginTop: 10,
    width: "100%",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingBottom: 20,
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
  },
  roundBorder: {
    width: 35,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
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
  LoginButton: {
    backgroundColor: "#80C241",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  LoginButtonText: {
    color: "white",
    fontWeight: 700,
  },
});

export default MainLoginscreen;
