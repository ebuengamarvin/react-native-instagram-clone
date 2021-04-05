import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CreatePostScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 36,
  },
});
