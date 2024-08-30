import { View, Text } from "react-native";
import React from "react";
import SignUpInput from "@/components/SignUpInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const signup_name = () => {
  return (
    <View className="bg-secondary flex-1 justify-between pb-10">
      <View>
        <SignUpInput
          title="What's your name?"
          info="This appears on your spotify profile"
        />
        <View className="border-t mx-8 mt-5 space-y-5 border-gray-300">
          <Text className="text-[10px] font-bld text-white">
            By tapping on "Create account",you agree to the spotify Terms of
            Use.
          </Text>
          <Text className="text-[10px] font-bld text-green-500">
            Terms of Use
          </Text>
          <Text className="text-[10px] font-bld text-white">
            To learn more about how Spotify collect, uses, shares and protexts
            your personal data, Please see the Spotify Privacy Policy.
          </Text>
          <Text className="text-[10px] font-bld text-green-500">
            Privacy Policy
          </Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-[10px] font-bld text-white">
              Please send me news and offers from Spotify.
            </Text>
            <View className="h-6 w-6 rounded-full border-[1.5px] border-gray-500"></View>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[10px] max-w-[250px] font-bld text-white">
              Share my registration data with Spotify content providers for
              marketing purpose.
            </Text>
            <View className="h-6 w-6 rounded-full border-[1.5px] border-gray-500"></View>
          </View>
        </View>
      </View>
      <View className="justify-center  items-center mt-5">
        <CustomButton
          text="Create an account"
          styleContainer="bg-white  w-44"
          onPress={() => router.replace("/pages/artistSelect")}
        />
      </View>
    </View>
  );
};

export default signup_name;
