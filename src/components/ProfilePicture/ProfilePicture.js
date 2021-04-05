import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { image } from "./link";

export default function ProfilePicture({
  uri,
  size = 70,
  borderColor = "#ae22e0",
}) {
  return (
    <View
      style={[
        styles.container,
        { width: size + 6, height: size + 6 },
        { borderColor: borderColor },
      ]}
    >
      <Image
        style={[styles.image, { width: size, height: size }]}
        source={{ uri: uri }}
      />
    </View>
  );
}
