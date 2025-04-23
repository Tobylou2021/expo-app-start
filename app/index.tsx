import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "./colors";
export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", "You have successfully logged in");
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>welcome to expo app start</Text>
        <Text style={styles.subtitle}>login to your account</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>input email</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="enter a email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>input password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="enter a passe"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  header: {
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
    color: colors.primary,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.dark,
  },
  inputBox: {
    height: 50,
    backgroundColor: colors.secondaryVariant,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: colors.background,
    fontWeight: "600",
    fontSize: 15,
  },
});
