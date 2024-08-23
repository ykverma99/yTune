import { View, Text, TextInput } from "react-native";
import React from "react";

const SignUpInput = ({
  title,
  info,
  pass,
}: {
  pass?: boolean;
  title: string;
  info: string;
}) => {
  return (
    <View className="px-8 py-3">
      <Text className="text-white tracking-wide text-xl font-bold">
        {title}
      </Text>
      <TextInput
        secureTextEntry={pass ? true : false}
        className="bg-white/40 py-2 px-3 text-white rounded-md my-1"
      />
      <Text className="text-white text-xxs">{info}</Text>
    </View>
  );
};

export default SignUpInput;
