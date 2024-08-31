import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import images from "@/constants/images";

type playlistTypes = {
  img?: any;
  title?: string;
};

const MyPlaylists = ({ title, img }: playlistTypes) => {
  return (
    <View className="bg-white/10 h-14 w-[162px] my-1 mr-1.5 rounded-lg flex-row items-center space-x-1.5">
      {img ? (
        <View className="h-full w-14 rounded-l-lg">
          <Image
            source={images.LongHair}
            className="h-full w-full rounded-l-lg"
            resizeMode="contain"
          />
        </View>
      ) : (
        <View className="relative justify-center items-center h-full w-14 rounded-l-lg">
          <LinearGradient
            colors={["#6b21a8", "#a855f7", "#d8b4fe"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute h-full w-full rounded-l-lg"
            pointerEvents="none"
          />
          <FontAwesome name="heart" size={24} color="white" />
        </View>
      )}
      <Text className="text-white capitalize font-semibold text-xs max-w-[100px]">
        {title}
      </Text>
    </View>
  );
};

export default MyPlaylists;
