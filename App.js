import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Searchbar </Text>
        </View>
        <View style={styles.list}>
          <Text>List </Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
    width: "100%",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    width: "100%",
    height: 100,
  },
});
