import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface songType {
  img: ImageSourcePropType;
  imgStyle?: string;
  styleContainer?: string;
  titleStyle?: string;
  textStyle?: string;
  title: string;
  text: string;
}
const SongCard = ({
  img,
  imgStyle,
  title,
  text,
  styleContainer,
  textStyle,
  titleStyle,
}: songType) => {
  return (
    <View className="flex-row items-center mt-3">
      <View className="h-14 w-14 rounded-md mr-2">
        <Image
          source={img}
          resizeMode="contain"
          className={`h-full w-full rounded-md ${imgStyle}`}
        />
      </View>
      <View>
        <Text className={`text-white font-semibold`}>{title}</Text>
        <Text className={`text-gray-400 text-xs`}>{text}</Text>
      </View>
    </View>
  );
};

export default SongCard;
