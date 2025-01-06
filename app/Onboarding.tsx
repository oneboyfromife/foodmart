import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BoldText, MediumText, SemiBoldText } from "../components/common/AppText";
import { AppView } from "../components/common/AppViews";
import { BorderButton, DefaultButton } from "@/components/common/Button";
import { router } from "expo-router";

const Onboarding = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Image source={require("../assets/images/Rider.png")} />
      <SemiBoldText style={{marginTop: 30, marginBottom: 30}}>Lorem ipsum dolor sit amet, cectetur adipcing elit, excepteur...</SemiBoldText>
      <DefaultButton title="Sign up" onPress={() => router.push('/SignUp')} style={{marginBottom: 20}} />
      <BorderButton title="Sign In" onPress={() => router.push('/SignUp')} />
    </View>
  );
};

export default Onboarding;
