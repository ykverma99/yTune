import CustomButton from "@/components/CustomButton";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

const login = () => {
  return (
    <SafeAreaView className="bg-secondary flex-1 justify-end items-center pb-12">
      <View className="mb-3">
        <View className="justify-center items-center">
          <FontAwesome5 name="spotify" size={40} style={{ color: "white" }} />
        </View>
        <View>
          <Text className="font-bold text-2xl text-white text-center tracking-wider">
            Millions of Songs.
          </Text>
          <Text className="font-bold text-2xl text-white text-center tracking-wider">
            Free on Spotify.
          </Text>
        </View>
      </View>
      <View className="w-[80%] justify-center items-center space-y-4">
        <CustomButton
          onPress={() => router.push("/pages/signup_1")}
          styleContainer="mt-2"
          text="Sign up free"
        />
        <CustomButton
          styleContainer="mt-2"
          varient="outline"
          leftIcon={<AntDesign color={"red"} name="google" size={15} />}
          text="Continue with Google"
        />
        <CustomButton
          styleContainer="mt-2"
          varient="outline"
          leftIcon={
            <MaterialIcons color={"#1877F2"} name="facebook" size={18} />
          }
          text="Continue with Facebook"
        />
        <CustomButton
          styleContainer="mt-2"
          varient="outline"
          leftIcon={<Foundation color={"white"} name="telephone" size={18} />}
          text="Continue with Mobile"
        />
      </View>
      <CustomButton varient="ghost" text="Login" />
    </SafeAreaView>
  );
};

export default login;
