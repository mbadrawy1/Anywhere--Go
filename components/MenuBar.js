import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons

const MenuBar = ({ onHomePress, onServicesPress, onActivitiesPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHomePress} style={styles.icon}>
        <Ionicons name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onServicesPress} style={styles.icon}>
        <Ionicons name="settings" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onActivitiesPress} style={styles.icon}>
        <Ionicons name="list" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    top: 600,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MenuBar;
