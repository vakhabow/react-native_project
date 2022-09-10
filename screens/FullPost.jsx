import React from "react";
import axios from "axios";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 360px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get("https://631c4bd21b470e0e12fe7830.mockapi.io/articles/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <ScrollView indicatorStyle="white" style={{ padding: 20, backgroundColor: "black" }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText style={{ color: "white" }}>{data.text}</PostText>
    </ScrollView>
  );
};
