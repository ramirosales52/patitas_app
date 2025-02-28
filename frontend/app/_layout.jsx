import React, { useEffect, useState } from "react";

import { Stack, useRouter, useSegments } from "expo-router";
// import auth from "@react-native-firebase/auth";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";

export default function Layout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const router = useRouter();
  const segments = useSegments();
  const { colorScheme } = useColorScheme();

  // const onAuthStateChanged = (user) => {
  //   console.log(user);
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };
  //
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);
  //
  // useEffect(() => {
  //   if (initializing) return;
  //
  //   const inAuthGroup = segments[0] === "(auth)";
  //
  //   if (user && !inAuthGroup) {
  //     router.replace("/(auth)/(tabs)/home");
  //   } else if (!user && inAuthGroup) {
  //     router.replace("/");
  //   }
  // }, [user, initializing]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
