import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";
import Title from "@/components/Title";

const search = () => {
  return (
    <SafeAreaView className="flex-1 bg-secondary p-4 py-8">
      <View className="flex-row items-center space-x-3">
        <SearchInput color="white" styleContainer="bg-white/20 w-[80%]" />
        <Text className="text-white">Cancel</Text>
      </View>
      <View>
        <Title title="Recent searches" style="text-base" />
      </View>
    </SafeAreaView>
  );
};

export default search;
