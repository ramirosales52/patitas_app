import React from "react";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
// import axios from "axios";
// import { BACKEND_URL } from "@env";

export default function Registro() {
  const router = useRouter();

  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPasswd, setShowPasswd] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      signIn();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({ displayName: displayName });
      await axios.post(`${BACKEND_URL}/users`, {
        displayName: displayName,
        email: email,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={require("../assets/backgroundLogin.png")}>
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ marginLeft: 30, marginRight: 30, marginTop: 30 }}>
          <View style={{ alignItems: "center" }} className="py-10">
            <Image
              source={require("../assets/patitasLogo (violeta).png")}
              style={styles.logo}
            />
          </View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color: "#3e367f",
              paddingLeft: 2,
              marginBottom: 5,
            }}
          >
            REGISTRO
          </Text>

          <View>
            <Text style={styles.label}>Nombre y Apellido</Text>
            <View style={styles.input_container}>
              <TextInput
                underlineColorAndroid="#6a5bba"
                cursorColor="#6a5bba"
                selectionColor="#958bce"
                style={styles.input}
                onChangeText={(text) => setDisplayName(text)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.input_container}>
              <TextInput
                underlineColorAndroid="#6a5bba"
                placeholder="ejemplo@gmail.com"
                cursorColor="#6a5bba"
                selectionColor="#958bce"
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.input_container_psw}>
              <TextInput
                underlineColorAndroid="#6a5bba"
                placeholder="••••••"
                cursorColor="#6a5bba"
                selectionColor="#958bce"
                secureTextEntry={!checked}
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
              />
              <Ionicons
                name={showPasswd ? "eye-off" : "eye"}
                color={"#3e367f"}
                size={22}
                onPress={() => setShowPasswd(!showPasswd)}
                style={{
                  position: "absolute",
                  right: 20,
                  top: 9,
                }}
              />
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={signUp}
            >
              <View style={[styles.boton_login, { marginBottom: 20 }]}>
                <Text style={{ color: "white", fontWeight: "600" }}>
                  REGISTRAR
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                router.back();
              }}
            >
              <View style={[styles.boton_registro, { marginBottom: 20 }]}>
                <Text style={{ color: "#3e367f", fontWeight: "600" }}>
                  CANCELAR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    color: "#3e367f",
    paddingBottom: 8,
    paddingLeft: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    color: "#3e367f",
    paddingLeft: 2,
  },
  input_container: {
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
    paddingTop: 9,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  input_container_psw: {
    backgroundColor: "#f0f0f0",
    paddingTop: 9,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  boton_login: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6a5bba",
    padding: 12,
    borderRadius: 8,
    width: "95%",
  },
  boton_registro: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    width: "95%",
    borderColor: "#6a5bba",
    borderWidth: 1,
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: "contain",
  },
  google_logo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 5,
  },
  boton_google: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#6a5bba",
    padding: 10,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#5848ab",
    width: "85%",
    borderWidth: 1,
    flexDirection: "row",
  },
});