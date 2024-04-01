import React from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
