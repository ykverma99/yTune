import { View, Text, TextInput, Alert, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface searchInput {
  title?: string;
  imgSize?: number;
  textSize?: string;
  styleContainer?: string;
  onPress?: () => void;
  color?: string;
}

const SearchInput = ({
  title,
  textSize,
  styleContainer,
  imgSize = 20,
  color,
  onPress,
}: searchInput) => {
  return (
    <View
      className={`relative flex-row items-center py-2 px-2 rounded-lg bg-white space-x-2 ${styleContainer}`}
    >
      <Ionicons name="search-sharp" size={imgSize} color={color || "black"} />
      <TextInput
        placeholder={`${title ? title : "Search"}`}
        onPress={onPress}
        placeholderTextColor={color}
        className={`bg-inherit text-gray-500  flex-1 ${textSize} ${
          color && "text-white"
        }`}
      />
    </View>
  );
};

export default SearchInput;
