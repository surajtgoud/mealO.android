import axios from "axios";
import { BASE_URL } from "../Config";

// Function to send OTP to the provided phone number
export async function sendOTP(phoneNumber) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      num: phoneNumber,
      code: "91", // or any other country code
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send OTP.");
  }
}

// Function to verify the OTP with the provided phone number
export async function verifyOTP(phoneNumber, otp) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/checkOTP`, {
      num: phoneNumber,
      code: "91", // or any other country code
      udId: "g78gy8", // or any other unique device ID
      otp: otp,
      type: "customer", // or any other user type
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to verify OTP.");
  }
}
