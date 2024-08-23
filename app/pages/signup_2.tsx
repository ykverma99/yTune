import { View, Text } from "react-native";
import React from "react";
import SignUpInput from "@/components/SignUpInput";
import CustomButton from "@/components/CustomButton";

const signup_2 = () => {
  return (
    <View className="bg-secondary flex-1">
      <SignUpInput title="Create a password" info="Use atleast 8 characters." />
      <View className="justify-center items-center mt-5">
        <CustomButton text="Next" styleContainer="bg-white/30 w-20" />
      </View>
    </View>
  );
};

export default signup_2;
