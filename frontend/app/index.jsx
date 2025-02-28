import React, { useEffect, useState } from "react";
import "../global.css";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
// import axios from "axios";
// import auth from "@react-native-firebase/auth";
import Button from "../components/Button";
import Divider from "../components/Divider";
import { useColorScheme } from "nativewind";
import InputField from "../components/InputField";
// import { BACKEND_URL, FIREBASE_WEB_CLIENT_ID } from "@env";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true),
    );
    const hideListener = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false),
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  // const signIn = async () => {
  //   setLoading(true);
  //   try {
  //     await auth().signInWithEmailAndPassword(email, password);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // GoogleSignin.configure({
  //   webClientId: FIREBASE_WEB_CLIENT_ID,
  // });

  // const onGoogleButtonPress = async () => {
  //   setLoading(true);
  //   try {
  //     await GoogleSignin.hasPlayServices({
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     const { idToken } = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     await auth().signInWithCredential(googleCredential);
  //
  //     const currentUser = auth().currentUser;
  //     await axios.post(`${BACKEND_URL}/users`, {
  //       displayName: currentUser.displayName,
  //       email: currentUser.email,
  //       dateJoined: currentUser.metadata.creationTime,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  // setLoading(false);
  // }
  // };

  const getTextColor = () =>
    colorScheme === "dark" ? "text-white" : "text-[#3e367f]";
  const getBgColor = () =>
    colorScheme === "dark" ? "bg-white/10" : "bg-[#f0f0f0]";
  const getContainerBgColor = () =>
    colorScheme === "dark" ? "bg-neutral-950" : "bg-white";

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className={`flex-1 ${getContainerBgColor()}`}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

        {!isKeyboardVisible && (
          <Image
            source={require("../assets/wave.png")}
            className="absolute -bottom-20 right-0 w-full dark:opacity-5"
          />
        )}

        <View className="items-center justify-center py-14 w-full">
          <Image
            source={
              colorScheme === "dark"
                ? require("../assets/patitasLogo.png")
                : require("../assets/patitasLogo (violeta).png")
            }
            resizeMode="contain"
            className="w-72 h-36"
          />
          <Button primary onPress={toggleColorScheme} label="colorScheme" />
        </View>

        <View className="px-4">
          <Text className={`text-2xl font-bold ${getTextColor()}`}>
            INICIAR SESIÓN
          </Text>

          {/* Email Input */}
          <View className="py-4">
            <InputField
              label="Email"
              value={email}
              placeholder="ejemplo@gmail.com"
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            {/* Password Input */}
            <InputField
              label="Contraseña"
              value={password}
              placeholder="••••••"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              icon={
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  color={colorScheme === "dark" ? "white" : "#3e367f"}
                  size={22}
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: 20, top: 9 }}
                />
              }
            />
            <TouchableOpacity>
              <Text className={`font-medium ${getTextColor()}`}>
                OLVIDASTE TU CONTRASEÑA?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Buttons */}
          <View className="justify-center items-center mb-2">
                                                {/* signIn  */}
            <Button label="INGRESAR" primary onPress={()=>{}} />
            <Button
              label="REGISTRARSE"
              secondary
              onPress={() => router.push("/register")}
            />
          </View>

          <Divider />
              {/* onGoogleButtonPress */}
          <Button google onPress={()=>{}} />
        </View>
      </View>
    </ScrollView>
  );
}
