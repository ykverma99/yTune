import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MyPlaylists from "@/components/MyPlaylists";
import CustomCard from "@/components/CustomCard";
import images from "@/constants/images";
import Title from "@/components/Title";
import Discover from "@/components/Discover";
import { SafeAreaView } from "react-native-safe-area-context";

const arr = Array(10).fill("*");
const arr2 = Array(3).fill("*");

const home = () => {
  return (
    <ScrollView>
      <SafeAreaView className="bg-secondary flex-1 ">
        {/* Greet */}
        <View className="flex-row p-3 justify-between items-center">
          <View>
            <Title title="Good Afternoon" />
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

        {/* Album section */}
        <View className="p-3 space-y-5">
          <Title title="Album" />
          <FlatList
            data={arr}
            renderItem={({ item }) => (
              <CustomCard
                img={images.LongHair}
                albumeName="Zohrajabeen"
                singers="B prak, Jaani"
              />
            )}
            keyExtractor={(item, idx) => idx.toString()}
            horizontal
            ItemSeparatorComponent={() => <View className="m-2"></View>}
          />
        </View>

        {/* Artist page */}
        <View className="p-3 mt-1 space-y-5">
          <Title title="Best of Artists" />
          <FlatList
            data={arr}
            renderItem={({ item }) => (
              <CustomCard img={images.LongHair} artist="Arjit Singh" />
            )}
            keyExtractor={(item, idx) => idx.toString()}
            horizontal
            ItemSeparatorComponent={() => <View className="m-2"></View>}
          />
        </View>

        {/* Artist page */}
        <View className="p-5 mt-3">
          <Title title="Discover" style="mb-5" />
          {arr2.map((elm, idx) => {
            return (
              <Discover
                key={idx}
                img={images.LongHair}
                title="Padmaavat"
                type={"Album"}
              />
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default home;
