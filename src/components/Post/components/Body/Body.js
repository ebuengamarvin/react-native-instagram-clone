import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import styles from "./styles";

let lastPress = 0;

function Body({ imageUri }) {
  const onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;
    const DOUBLE_PRESS_DELAY = 400;

    if (delta < DOUBLE_PRESS_DELAY) {
      console.log("Double Press");
    }
    lastPress = time;
  };

  return (
    <TouchableWithoutFeedback onPress={onDoublePress}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableWithoutFeedback>
  );
}

export default Body;
