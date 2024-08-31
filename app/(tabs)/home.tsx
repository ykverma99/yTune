import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import MyPlaylists from "@/components/MyPlaylists";

const arr = Array(10).fill("*");

const home = () => {
  return (
    <SafeAreaView className="bg-secondary flex-1 ">
      {/* Greet */}
      <View className="flex-row p-3 justify-between items-center">
        <View>
          <Text className="text-white text-xl font-semibold">
            Good Afternoon
          </Text>
          <Text className="text-white text-sm">Have a Nice Day username</Text>
        </View>
        <View>
          <AntDesign name="setting" size={22} color="gray" />
        </View>
      </View>

      {/* MY playlist section */}
      <View className="flex-row flex-wrap p-3 py-5">
        <MyPlaylists title="liked songs" />
        <MyPlaylists title="liked songs" img={"dscf"} />
        <MyPlaylists title="liked songs" img={"dscf"} />
        <MyPlaylists title="liked songs" img={"dscf"} />
        <MyPlaylists title="liked songs" img={"dscf"} />
        <MyPlaylists title="liked songs" img={"dscf"} />
      </View>
    </SafeAreaView>
  );
};

export default home;
