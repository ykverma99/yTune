import { View, Text } from "react-native";
import React from "react";
import Title from "./Title";

const SearcBox = ({
  title,
  styleContainer,
}: {
  title: string;
  styleContainer: string;
}) => {
  return (
    <View className={`h-28 w-40 rounded-md mb-2 ${styleContainer}`}>
      <Title title={title} style="text-base absolute top-3 left-3" />
    </View>
  );
};

export default SearcBox;
