import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";
import Title from "@/components/Title";
import SongCard from "@/components/SongCard";
import images from "@/constants/images";

const search = () => {
  return (
    <SafeAreaView className="flex-1 bg-secondary px-4 pt-8">
      <View className="flex-row items-center space-x-3">
        <SearchInput color="white" styleContainer="bg-white/20 w-[80%]" />
        <Text className="text-white">Cancel</Text>
      </View>
      <ScrollView className="mt-6">
        <Title title="Recent searches" style="text-base" />
        <View className="mt-4">
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
          <SongCard img={images.LongHair} title="Hozier" text="Artist" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
