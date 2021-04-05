import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import StoriesData from "../../api/storiesData";
import styles from "./styles";
import ProfilePicture from "../../components/ProfilePicture";
import { Feather, Ionicons } from "@expo/vector-icons";
import globalStyles from "../../global/globalStyles";

export default function StoryScreen() {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  useEffect(() => {
    const userStoriesData = StoriesData.find(
      (storyData) => storyData.user.id === userId
    );
    setUserStories(userStoriesData);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    setActiveStory(userStories?.stories[activeStoryIndex]);
  }, [userStories, activeStoryIndex, userId]);

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories?.stories.length - 1) {
      navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (event) => {
    const x = event.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories?.stories || userStories?.stories.length === 0) {
    return (
      <SafeAreaView style={{ backgroundColor: "grey", height: "100%" }}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, globalStyles.androidSafeArea]}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{ uri: activeStory?.imageUri }}
          style={styles.image}
        >
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories?.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories?.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory?.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={24} color="#ffffff" />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={"white"}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons name="paper-plane-outline" size={24} color="#ffffff" />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
