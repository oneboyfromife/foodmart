import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AppView } from "@/components/common/AppViews";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "@/constants/colors";
import { BoldText, MediumText } from "@/components/common/AppText";
import { DefaultButton } from "@/components/common/Button";
import { DefaultInput, EmailInput } from './../components/common/AppInput';

export default function SignUp() {
  return (
    <AppView>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 30,
          backgroundColor: COLORS.grey,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 0.5,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <BoldText style={{ fontSize: 24 }}>Create an account</BoldText>
      <MediumText
        style={{
          fontSize: 16,
          color: "#3D3D3D",
          marginTop: 5,
          marginBottom: 20,
        }}
      >
        Create an account today to streamline your payments and manage your
        finances effortlessly.
      </MediumText>
      <EmailInput title='Email address' placeholder="Enter your email..." />
    </AppView>
  );
}
