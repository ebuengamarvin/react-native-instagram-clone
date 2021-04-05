import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";

export default function Footer({
  likesCount: likesCountProp,
  caption,
  postedAt,
}) {
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={onLikePressed}>
            {isLiked ? (
              <AntDesign name="heart" size={24} color={"#e73838"} />
            ) : (
              <AntDesign name="hearto" size={24} color={"#545454"} />
            )}
          </TouchableOpacity>
          <Ionicons name="md-chatbubble-outline" size={24} color={"#545454"} />
          <Ionicons name="paper-plane-outline" size={24} color={"#545454"} />
        </View>

        <FontAwesome name="bookmark-o" size={24} color={"#545454"} />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
}
