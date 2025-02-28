import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import "../global.css";
export default function Button({ label, primary, secondary, google, onPress }) {
  const { colorScheme } = useColorScheme();

  return (
    <>
      {primary && (
        <TouchableOpacity
          className="w-full justify-center items-center"
          onPress={onPress}
        >
          <View className="w-11/12 items-center justify-center py-4 rounded-lg my-3 bg-[#6a5bba]">
            <Text className="text-white font-bold">{label}</Text>
          </View>
        </TouchableOpacity>
      )}
      {secondary && (
        <TouchableOpacity
          className="w-full justify-center items-center"
          onPress={onPress}
        >
          <View
            className={`border w-11/12 items-center justify-center py-4 rounded-lg my-2 ${colorScheme === "dark" ? "border-neutral-900" : "border-[#6a5bba]"} ${colorScheme === "dark" ? "bg-neutral-900" : "bg-white"}`}
          >
            <Text
              className={`font-bold ${colorScheme === "dark" ? "text-white" : "text-[#3e367f]"}`}
            >
              {label}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {google && (
        <TouchableOpacity
          className="w-full justify-center items-center bg-red-500"
          onPress={onPress}
        >
          <View
            className={`items-center justify-center py-3 rounded-lg w-10/12 border flex-row border-[#6a5bba] ${colorScheme === "dark" ? "bg-neutral-950" : "bg-white"}`}
          >
            {/* <Image
              source={require("../assets/Google_iddt-qQAj1_4.png")}
              resizeMode="stretch"
              className="w-1 h-1 mr-20"
            /> */}
            <Text
              className={`${colorScheme === "dark" ? "text-white" : "text-[#3e367f]"} font-medium`}
            >
              Continuar con{" "}
            </Text>
            <Text
              className={`${colorScheme === "dark" ? "text-white" : "text-[#3e367f]"} font-extrabold`}
            >
              Google
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}