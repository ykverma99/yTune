import { View, Text } from "react-native";
import React from "react";

const Title = ({ title, style }: { title: string; style?: string }) => {
  return (
    <Text className={`text-white text-2xl font-bold ${style}`}>{title}</Text>
  );
};

export default Title;
