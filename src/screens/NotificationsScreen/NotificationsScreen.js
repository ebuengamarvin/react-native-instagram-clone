import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NotificationScreen</Text>
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
