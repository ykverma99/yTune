import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import SearchInput from "@/components/SearchInput";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";

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
      />
      {artist.length > 2 ? (
        <View className="justify-center items-center absolute bottom-5 w-full">
          <CustomButton text="Start" styleContainer="w-28" />
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
    <Pressable
      onPress={onPress}
      className={`items-center gap-1 m-1.5 ${isSelected ? "bg-blue-500" : ""}`}
    >
      <View className="relative">
        <Image
          resizeMode="contain"
          source={images.LongHair}
          className="w-24 h-24 rounded-full"
        />
      </View>
      <Text className="text-white font-semibold">Artist</Text>
    </Pressable>
  );
};

export default artistSelect;
