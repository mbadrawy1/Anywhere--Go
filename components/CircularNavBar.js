import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const CircularNavBar = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          {/* <Ionicons name="settings" size={24} color="black" /> */}
          <FontAwesome
            name="history"
            size={24}
            color="black"
            style={styles.rightMargin}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icon]}>
          <Ionicons name="person" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="list" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={[styles.cutout, styles.elevated]}>
          {/* Place your circular button or custom icon here */}
          {/* //Play icon */}
          <MaterialCommunityIcons name="highway" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 1,
    width: "100%",
    height: 45,
    borderWidth: 2,
    borderColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 0.5,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    width: "100%",
  },
  icon: {
    marginHorizontal: 30,
  },
  cutout: {
    width: 65, // Adjust the size of the cutout as needed
    height: 65, // Adjust the size of the cutout as needed
    borderRadius: 30, // Ensure it's a perfect circle
    backgroundColor: "white", // Make it transparent
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginBottom: -10,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 0.1,
  },
  leftMargin: {
    marginLeft: 10,
  },
  rightMargin: {
    marginRight: 50,
  },
});

export default CircularNavBar;
