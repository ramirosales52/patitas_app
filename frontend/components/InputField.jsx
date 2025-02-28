import { View, Text, TextInput } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  icon,
}) {
  const { colorScheme } = useColorScheme();

  const textColor = colorScheme === "dark" ? "text-white" : "text-[#3e367f]";
  const bgColor = colorScheme === "dark" ? "bg-white/10" : "bg-[#f0f0f0]";

  return (
    <View className="mb-5">
      <Text className={`text-lg font-medium ${textColor}`}>{label}</Text>
      <View className={`pt-2 px-2 rounded-lg my-1 ${bgColor}`}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={"#6f6f6f"}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          className={`text-lg px-1 pb-2 ${textColor}`}
          cursorColor="#6a5bba"
          selectionColor="#958bce"
        />
        {icon}
      </View>
    </View>
  );
}