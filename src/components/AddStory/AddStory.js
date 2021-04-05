import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";
import miracle from "../../../assets/images/miracle-post.jpg";

export default function AddStory() {
  const authUser = {
    imageUri:
      "https://pbs.twimg.com/profile_images/1243181247708434435/QDlRD72X_400x400.jpg",
    name: "Miracle",
  };

  return (
    <View style={styles.container}>
      <ProfilePicture uri={authUser.imageUri} borderColor="transparent" />
      <View style={styles.icon}>
        <AntDesign name="pluscircle" size={20} color="blue" />
      </View>
    </View>
  );
}
