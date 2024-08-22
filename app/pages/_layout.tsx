import { Stack } from "expo-router";

export default function PageLayout() {
  return (
    <Stack>
      <Stack.Screen name="start" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup_1"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
