import SignupHeader from "@/components/SignupHeader";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        // options={{
        //   headerShown: false,
        // }}
        options={{
          // headerShown: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1B1A1C" },
          headerTitle: () => (
            <SignupHeader title="Choose 3 or more artists you like." />
          ),
        }}
      />
      <Stack.Screen name="pages" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
