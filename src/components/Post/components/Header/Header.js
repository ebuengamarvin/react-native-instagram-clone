import React from "react";
import { View, Text } from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function Header({ imageUri, name }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <Entypo name="dots-three-vertical" size={16} color="black" />
    </View>
  );
}
