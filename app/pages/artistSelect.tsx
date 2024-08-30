import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import SearchInput from "@/components/SearchInput";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const num = Array(25).fill("*");

const artistSelect = () => {
  const [artist, setartist] = useState<number[]>([]);

  const handleSelect = (idx: number) => {
    setartist((prevArtist) => {
      if (prevArtist.includes(idx)) {
        return prevArtist.filter((artistIdx) => artistIdx != idx);
      }
      return [...prevArtist, idx];
    });
  };
  return (
    <View className="flex-1 relative bg-secondary">
      <View className="p-6">
        <SearchInput />
      </View>
      <ScrollView className="mb-2">
        <View className="flex-row flex-wrap px-2">
          {num.map((item, idx) => {
            return (
              <ArtistAvtar
                isSelected={artist.includes(idx)}
                onPress={() => handleSelect(idx)}
                key={idx}
              />
            );
          })}
        </View>
      </ScrollView>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 1 }}
        className="absolute h-full w-full"
        pointerEvents="none"
      />
      {artist.length > 2 ? (
        <View className="justify-center items-center absolute bottom-5 w-full">
          <CustomButton
            onPress={() => router.replace("/(tabs)/home")}
            text="Start"
            styleContainer="w-28"
          />
        </View>
      ) : null}
    </View>
  );
};

const ArtistAvtar = ({
  onPress,
  isSelected,
}: {
  onPress: () => void;
  isSelected: boolean;
}) => {
  return (
    <Pressable onPress={onPress} className={`items-center gap-1 m-1.5`}>
      <View className="relative">
        <Image
          resizeMode="contain"
          source={images.LongHair}
          className="w-24 h-24 rounded-full"
        />
        {isSelected ? (
          <View className="absolute bottom-0 right-1">
            <AntDesign name="checkcircle" size={20} color="#1ED760" />
          </View>
        ) : null}
      </View>
      <Text className="text-white font-semibold">Artist</Text>
    </Pressable>
  );
};

export default artistSelect;
