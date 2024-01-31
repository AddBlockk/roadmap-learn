import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import styled from "styled-components";

const PostsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Posts: React.FC = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState<PostData[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "Unknown error");
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <PostsStyled>
      <h1>Посты</h1>
      {isLoading ? (
        <h1>Загрузка...</h1>
      ) : (
        posts && posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </PostsStyled>
  );
};

export default Posts;
