import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MediumText, BoldText, SemiBoldText } from "./AppText";
import COLORS from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const DefaultInput = (props) => {
  return (
    <View style={{ ...props.style }}>
      <SemiBoldText
        style={{
          fontSize: 17,
          marginBottom: 10,
        }}
      >
        {props.title}
      </SemiBoldText>
      <TextInput
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.greyBorder,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 16,
          paddingBottom: 16,
          fontSize: 16,
          fontFamily: "Sen-Regular",
        }}
        placeholder={props.placeholder}
        placeholderTextColor="#494949"
        onChangeText={(val) => props.onChangeText(val)}
      />
    </View>
  );
};

export const EmailInput = (props) => {
  return (
    <View style={{ ...props.style }}>
      <SemiBoldText
        style={{
          fontSize: 17,
          marginBottom: 10,
        }}
      >
        {props.title}
      </SemiBoldText>
      <View>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        <TextInput
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.greyBorder,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 16,
            paddingBottom: 16,
            fontSize: 16,
            fontFamily: "Sen-Regular",
          }}
          placeholder={props.placeholder}
          placeholderTextColor="#494949"
          onChangeText={(val) => props.onChangeText(val)}
        />
      </View>
    </View>
  );
};
