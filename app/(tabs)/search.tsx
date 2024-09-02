import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/Title";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchInput from "@/components/SearchInput";
import SearcBox from "@/components/SearcBox";

const search = () => {
  return (
    <SafeAreaView className="bg-secondary flex-1code p-4">
      <ScrollView>
        {/* search section */}
        <View className="flex-row items-center justify-between mb-5">
          <Title title="Search" />
          <Ionicons name="camera-outline" size={24} color="white" />
        </View>
        {/* Text Input */}
        <View className="">
          <SearchInput
            styleContainer="py-2.5"
            title="Artists, songs or album"
            textSize="text-gray-800"
            imgSize={22}
          />
        </View>
        {/* TOp genres */}
        <View className="mt-5">
          <Title title="Your top genres" style="text-lg" />
          <View className="flex-row items-center justify-between flex-wrap mt-1">
            <SearcBox title="Pop" styleContainer="bg-[#9854B2]" />
            <SearcBox title="Indie" styleContainer="bg-[#678026]" />
          </View>
        </View>
        {/* Popular songs */}
        <View className="mt-5">
          <Title title="Popular Albums" style="text-lg" />
          <View className="flex-row items-center justify-between flex-wrap mt-1">
            <SearcBox title="Zohrajbeen" styleContainer="bg-[#3371E4]" />
            <SearcBox title="Season of sartaj" styleContainer="bg-[#CF4321]" />
          </View>
        </View>
        {/* Browse all */}
        <View className="mt-5">
          <Title title="Browse all" style="text-lg" />
          <View className="flex-row items-center justify-between flex-wrap mt-1">
            <SearcBox title="Pop" styleContainer="bg-[#ABBB6D]" />
            <SearcBox title="Pop" styleContainer="bg-[#223160]" />
            <SearcBox title="Pop" styleContainer="bg-[#75A768]" />
            <SearcBox title="Pop" styleContainer="bg-[#8768A7]" />
            <SearcBox title="Pop" styleContainer="bg-[#9854B2]" />
            <SearcBox title="Pop" styleContainer="bg-[#3371E4]" />
            <SearcBox title="Pop" styleContainer="bg-[#678026]" />
            <SearcBox title="Pop" styleContainer="bg-[#CF4321]" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
