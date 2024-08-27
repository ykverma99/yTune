import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const SignupHeader = ({ title }: { title?: string }) => {
  const router = useRouter();
  return (
    <View className="flex-row items-center relative">
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute  bg-black/75 h-8 w-8 rounded-full items-center justify-center"
      >
        <Ionicons name="chevron-back" color={"grey"} size={20} />
      </TouchableOpacity>
      <Text className="text-white text-center w-[97%] font-semibold">
        {title ? title : "Create account"}
      </Text>
    </View>
  );
};

export default SignupHeader;
