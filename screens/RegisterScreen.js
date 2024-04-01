// RegisterScreen.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const RegisterScreen = ({ toggleScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Implement registration logic here
    console.log("Register with:", email, password);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Switch to Login" onPress={toggleScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
