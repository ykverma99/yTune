import { View, Text, TextInput, Alert } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface searchInput {
  title?: string;
  imgSize?: number;
  textSize?: string;
  styleContainer?: string;
}

const SearchInput = ({
  title,
  textSize,
  styleContainer,
  imgSize = 20,
}: searchInput) => {
  return (
    <View
      className={`relative flex-row items-center py-2 px-2 rounded-lg bg-white space-x-2 ${styleContainer}`}
    >
      <Ionicons name="search-sharp" size={imgSize} color="black" />
      <TextInput
        placeholder={`${title ? title : "Search"}`}
        className={`bg-white text-gray-500  flex-1 ${textSize}`}
        onPress={() => Alert.alert("hello")}
      />
    </View>
  );
};

export default SearchInput;
