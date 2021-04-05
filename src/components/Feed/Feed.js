import React from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import Post from "../Post";
import Stories from "../Stories";
import MiraclePost from "../../../assets/images/miracle-post.jpg";
import miracle from "../../../assets/images/miracle-post.jpg";
import { AntDesign } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    user: {
      imageUri:
        "https://pbs.twimg.com/profile_images/1243181247708434435/QDlRD72X_400x400.jpg",
      name: "Miracle",
    },
    imageUri:
      "https://pbs.twimg.com/profile_images/1243181247708434435/QDlRD72X_400x400.jpg",
    caption: "My best hero in Dota 2",
    likesCount: 1234,
    postedAt: "6 minutes ago",
  },
  {
    id: "2",
    user: {
      imageUri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nvP3D__DQKaiTCpOrZgt6lrETYdkgOlepw&usqp=CAU",
      name: "Void",
    },
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nvP3D__DQKaiTCpOrZgt6lrETYdkgOlepw&usqp=CAU",
    caption: "My best hero in Dota 2",
    likesCount: 1234,
    postedAt: "6 minutes ago",
  },
  {
    id: "3",
    user: {
      imageUri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG27hNRJpiYz86CJCRCVDEzDMIXOeOvwnNmOQmBY5udh8SYFtdyCSEFE90297DRUnFmMI&usqp=CAU",
      name: "Zues",
    },
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG27hNRJpiYz86CJCRCVDEzDMIXOeOvwnNmOQmBY5udh8SYFtdyCSEFE90297DRUnFmMI&usqp=CAU",
    caption: "My best hero in Dota 2",
    likesCount: 1234,
    postedAt: "6 minutes ago",
  },
  {
    id: "4",
    user: {
      imageUri:
        "https://steamuserimages-a.akamaihd.net/ugc/942833979450181445/9D0CFCB5FF32FE4A1ED48F805E9F6B9033F909F2/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      name: "Zues",
    },
    imageUri:
      "https://steamuserimages-a.akamaihd.net/ugc/942833979450181445/9D0CFCB5FF32FE4A1ED48F805E9F6B9033F909F2/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    caption: "My best hero in Dota 2",
    likesCount: 1234,
    postedAt: "6 minutes ago",
  },
];

const Feed = () => (
  <FlatList
    keyExtractor={({ id }) => id}
    data={data}
    renderItem={({ item }) => <Post post={item} />}
    ListHeaderComponent={Stories}
    showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl
        refreshing={false}
        // onRefresh={true}
        colors={["black", "green"]}
      />
    }
  />
);

export default Feed;
