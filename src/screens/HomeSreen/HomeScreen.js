import React from "react";
import { SafeAreaView } from "react-native";
import Feed from "../../components/Feed";
import globalStyles from "../../global/globalStyles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <Feed />
    </SafeAreaView>
  );
}
