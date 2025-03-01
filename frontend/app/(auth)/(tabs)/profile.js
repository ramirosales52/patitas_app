import { Text, View } from "react-native";
import Button from "../../../components/Button";
import { useColorScheme } from "nativewind";

import React from "react";
import { useRouter } from "expo-router";

export default function Profile() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const router = useRouter();

  return (
    <View className="flex items-center justify-center h-full">
      <Text className="dark:text-white font-bold text-xl">Perfil</Text>

      <Button label="Atras" primary onPress={() => router.replace("/")} />
      <Button label="Change theme" secondary onPress={toggleColorScheme} />
      <Text className="dark:text-white text-2xl">Theme: {colorScheme}</Text>
    </View>
  );
}
