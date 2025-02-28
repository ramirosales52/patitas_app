import { View, Text } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

export default function Divider() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <View className="flex-row w-full items-center justify-center mb-5">
        <View
          className={`border-b w-1/4 mr-12 ${colorScheme === "dark" ? "border-b-white" : "border-b-[#3e367f]"}`}
        />
        <Text
          className={`text-xl ${colorScheme === "dark" ? "text-white" : "text-[#3e367f]"}`}
        >
          o
        </Text>
        <View
          className={`border-b w-1/4 ml-12 ${colorScheme === "dark" ? "border-b-white" : "border-b-[#3e367f]"}`}
        />
      </View>
    </>
  );
}