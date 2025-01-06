import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AppView } from "@/components/common/AppViews";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "@/constants/colors";
import {
  BoldText,
  MediumText,
  SemiBoldText,
} from "@/components/common/AppText";
import { DefaultButton } from "@/components/common/Button";
import {
  DefaultInput,
  EmailInput,
  PasswordInput,
} from "./../components/common/AppInput";

export default function SignUp() {
  return (
    <AppView>
      <SemiBoldText
        style={{
          textAlign: "center",
          fontSize: 35,
          marginTop: 20,
          marginBottom: 5,
        }}
      >
        Welcome!
      </SemiBoldText>
      <MediumText
        style={{ textAlign: "center", marginBottom: 20, fontSize: 16 }}
      >
        Sign into your account.
      </MediumText>
      <DefaultInput
        title="Email/ Mobile Number"
        placeholder="Enter your email..."
      />
      <PasswordInput title="Password" />
      <MediumText style={{ fontSize: 12, textAlign: "right" }}>
        Forgot Password?{" "}
      </MediumText>
      <DefaultButton title="Sign in" style={{ marginBottom: 20 }} />
      <MediumText style={{ fontSize: 12, textAlign: "center" }}>
        Don’t have an Account? Sign Up
      </MediumText>
    </AppView>
  );
}
