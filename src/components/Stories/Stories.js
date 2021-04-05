import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import AddStory from "../AddStory/AddStory";
import Story from "../Story/Story";
import styles from "./styles";
import miracle from "../../../assets/images/miracle-post.jpg";
import StoriesData from "../../api/storiesData";

export default function Stories() {
  return (
    <FlatList
      keyExtractor={({ user }) => user.id}
      data={StoriesData}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storiesContainer}
      renderItem={({ item }) => <Story story={item} />}
      ListHeaderComponent={<AddStory />}
    />
  );
}
