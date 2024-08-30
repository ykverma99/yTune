import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { ReactNode } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({
  icon,
  color,
  focused,
  name,
}: {
  color: string;
  icon: ReactNode;
  focused: boolean;
  name: string;
}) => {
  return (
    <View className="items-center  justify-center  gap-2">
      {icon}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const Tabslayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1ED760",

        tabBarShowLabel: false,
        //   tabBarInactiveTintColor: "#",
        tabBarStyle: {
          backgroundColor: "#1B1A1C",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<FontAwesome5 size={22} name="home" color={color} />}
              name="Home"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<Ionicons name="search-sharp" size={22} color={color} />}
              name="Search"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Your Library",

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={
                <MaterialCommunityIcons
                  name="bookshelf"
                  size={22}
                  color={color}
                />
              }
              name="Your Library"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;
