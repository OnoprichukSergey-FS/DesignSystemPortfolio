import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Root layout for the entire app
export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerShown: false, // cleaner UI (your design uses custom nav)
          animation: "fade", // smoother transitions
          contentStyle: {
            backgroundColor: "#000", // fallback background
          },
        }}
      />
    </>
  );
}
