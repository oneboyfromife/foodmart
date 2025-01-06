import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MediumText, BoldText, SemiBoldText } from "./AppText";
import COLORS from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from '@expo/vector-icons/Ionicons';

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

export const PasswordInput = (props) => {
  const [password, setPassword] = useState(null);
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  return (
    <View>
      <SemiBoldText
        style={{
          fontSize: 13,
          marginBottom: 5,
        }}
      >
        {props.title}
      </SemiBoldText>
      <View
        style={{
          width: "100%",
          backgroundColor: "#ECECEC",
          borderRadius: 10,
          borderBottomColor: "#FE7622",
          borderRadius: 5,
          borderBottomWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 22,
          ...props.style,
        }}
      >
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#494949"
          secureTextEntry={isPasswordShown}
          value={password}
          onChangeText={(val) => props.onChangeText(val)}
          style={{
            width: "100%",
            fontSize: 13,
            fontFamily: "Sen-Regular",
            paddingVertical: 10,
          }}
        />

        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{
            position: "absolute",
            right: 12,
          }}
        >
          {isPasswordShown == true ? (
            <Ionicons name="eye" size={20} color="black" />
          ) : (
            <Ionicons name="eye-off" size={20} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};