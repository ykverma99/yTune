import { View, Text, TouchableOpacity } from "react-native";
import { ReactNode } from "react";

interface btnProps {
  text: string;
  styleContainer?: string;
  onPress?: () => void;
  styleText?: string;
  varient?: "fill" | "outline" | "ghost";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const varients = {
  fill: "bg-primary",
  ghost: "border-0 ",
  outline: "border-0.5 border-gray-300",
};

const CustomButton = ({
  text,
  styleText,
  styleContainer,
  onPress,
  varient = "fill",
  leftIcon,
  rightIcon,
}: btnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`h-11 w-full  relative flex-row rounded-full justify-center items-center ${varients[varient]} ${styleContainer}`}
    >
      {leftIcon ? <View className="absolute left-4 ">{leftIcon}</View> : null}
      <Text
        className={`font-bold tracking-wider ${
          varient != "fill" ? "text-white" : "text-black"
        } ${styleText}`}
      >
        {text}
      </Text>
      {rightIcon ? (
        <View className="absolute right-4 ">{rightIcon}</View>
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomButton;
