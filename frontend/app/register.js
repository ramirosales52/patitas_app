import { View, Text } from "react-native";
import Button from "../components/Button";
import React from "react";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();
  return (
    <View className="flex items-center justify-center h-full">
      <Text className="dark:text-white font-bold text-xl">Register</Text>
      <Button
        label={"Atras"}
        primary
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
};

export default Register;
