import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface cardTypes {
  albumeName?: string;
  singers?: string;
  img: ImageSourcePropType;
  artist?: string;
}

const CustomCard = ({ albumeName, singers, img, artist }: cardTypes) => {
  return (
    <View className="space-y-2">
      <View className="h-[152px] w-[152px]">
        <Image
          source={img}
          resizeMode="contain"
          className={`h-full w-full ${artist ? "rounded-full" : "rounded-sm"}`}
        />
      </View>
      <View>
        <Text className={`text-white font-semibold ${artist && "text-center"}`}>
          {artist || albumeName}
        </Text>
        {!artist ? (
          <Text className="text-gray-500 text-xs">{singers}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default CustomCard;
