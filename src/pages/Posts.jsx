import { useEffect, useState } from "react";
import Post from "../components/Post";
import styled from "styled-components";

const PostsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Posts() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
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
}
