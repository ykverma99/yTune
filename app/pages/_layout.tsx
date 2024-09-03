import SignupHeader from "@/components/SignupHeader";
import { Stack } from "expo-router";

export default function PageLayout() {
  return (
    <Stack>
      <Stack.Screen name="start" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup_1"
        options={{
          // headerShown: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1B1A1C" },
          headerTitle: () => <SignupHeader />,
        }}
      />
      <Stack.Screen
        name="signup_2"
        options={{
          // headerShown: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1B1A1C" },
          headerTitle: () => <SignupHeader />,
        }}
      />
      <Stack.Screen
        name="signup_name"
        options={{
          // headerShown: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1B1A1C" },
          headerTitle: () => <SignupHeader />,
        }}
      />
      <Stack.Screen
        name="artistSelect"
        options={{
          // headerShown: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1B1A1C" },
          headerTitle: () => (
            <SignupHeader title="Choose 3 or more artists you like." />
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="search" options={{ headerShown: false }} />
    </Stack>
  );
}
