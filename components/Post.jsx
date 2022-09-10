import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: white;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  color:green
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 40) + "...";
  }

  return str;
};

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView
      style={{
        backgroundColor: "black",
      }}
    >
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
  );
};
