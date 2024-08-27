import { View, Text } from "react-native";
import React from "react";
import SignUpInput from "@/components/SignUpInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const signup_2 = () => {
  return (
    <View className="bg-secondary flex-1">
      <SignUpInput title="Create a password" info="Use atleast 8 characters." />
      <View className="justify-center items-center mt-5">
        <CustomButton
          onPress={() => router.push("/pages/signup_name")}
          text="Next"
          styleContainer="bg-white/30 w-24"
        />
      </View>
      <StatusBar hidden />
    </View>
  );
};

export default signup_2;
