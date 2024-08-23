import { View, Text } from "react-native";
import React from "react";
import SignUpInput from "@/components/SignUpInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const signup_1 = () => {
  return (
    <View className="bg-secondary flex-1">
      <SignUpInput
        title="What's your email?"
        info="You'll need to confirm the email later."
      />
      <View className="justify-center items-center mt-5">
        <CustomButton
          onPress={() => router.replace("/pages/signup_2")}
          text="Next"
          styleContainer="bg-white/30 w-20"
        />
      </View>
    </View>
  );
};

export default signup_1;
