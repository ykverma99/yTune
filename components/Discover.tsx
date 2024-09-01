import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface cardTypes {
  title?: string;
  type: String;
  img: ImageSourcePropType;
}

const Discover = ({ title, img, type }: cardTypes) => {
  return (
    <View className="relative h-96 w-80 my-2  rounded-xl">
      <Image
        source={img}
        resizeMode="cover"
        className="h-full w-full rounded-xl"
      />
      <Text className="absolute bottom-4 z-30 w-full text-white text-xl justify-center font-normal text-center">{`${type}: ${title}`}</Text>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        className="absolute h-full w-full"
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.8 }}
        pointerEvents="none"
      />
    </View>
  );
};

export default Discover;
