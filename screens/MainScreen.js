import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import HomeSearch from "../components/HomeSearch";
//import MenuBar from "../components/MenuBar";
import CircularNavBar from "../components/CircularNavBar";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LogInScreen";
import RegisterScreen from "./RegisterScreen";
import { useNavigation } from "@react-navigation/native";

const MainScreen = (props) => {
  const drawerRef = useRef(null);
  const navigation = useNavigation();

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const renderNavigationView = () => (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerItem}>Menu Item 1</Text>
      <Text style={styles.drawerItem}>Menu Item 2</Text>
      <TouchableOpacity onPress={() => drawerRef.current.closeDrawer()}>
        <Entypo name="login" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Entypo name="add-user" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => drawerRef.current.closeDrawer()}
        style={{ marginTop: 550 }}
      >
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      {/* Add more menu items as needed */}
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={renderNavigationView}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer} style={styles.hamburger}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <HomeSearch />
        {/* Other components */}
        {/* <MenuBar /> */}
        <CircularNavBar />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  drawerItem: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  hamburger: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
  },
});

export default MainScreen;
