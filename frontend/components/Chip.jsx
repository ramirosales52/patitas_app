
import React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { useColorScheme } from "nativewind";

export default function Chip({ title, theme, onPress }) {
  const { colorScheme } = useColorScheme();

  function bgColor() {
    if (theme === "active") {
      return "bg-[#423086]/30";
    } else if (theme !== "active" && colorScheme === "dark") {
      return "bg-white/10";
    } else {
      return "bg-black/10";
    }
  }

  function textColor() {
    if (theme === "active") {
      return "text-[#423086]";
    } else if (theme !== "active" && colorScheme === "dark") {
      return "text-white/50";
    } else {
      return "text-black/50";
    }
  }

  return (
    <Pressable onPress={onPress}>
      <View
        className={`items-center justify-center rounded-full py-1 px-4 mx-1 ${bgColor()}`}
      >
        <Text className={`font-bold ${textColor()}`}>{title}</Text>
      </View>
    </Pressable>
  );
}
