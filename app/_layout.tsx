import { Stack } from "expo-router/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "Sen-Medium": require("../assets/fonts/BeVietnamPro-Medium.ttf"),
    "Sen-Regular": require("../assets/fonts/BeVietnamPro-Regular.ttf"),
    "Sen-Italic": require("../assets/fonts/BeVietnamPro-MediumItalic.ttf"),
    "Sen-Bold": require("../assets/fonts/BeVietnamPro-Bold.ttf"),
    "Sen-SemiBold": require("../assets/fonts/BeVietnamPro-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "slide_from_right",
        }}
      />
      <StatusBar style="light" />
    </View>
  );
}
