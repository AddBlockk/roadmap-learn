import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import styled from "styled-components";

const PostsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 20px;
  }
  .input__search {
    border-radius: 5px;
    border: 1px solid black;
    padding: 7px;
  }
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
  const [searchText, setSearchText] = useState<string>("");

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

  const filteredPosts = posts.filter((post) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const titleIncludesSearchText = post.title
      .toLowerCase()
      .includes(lowerCaseSearchText);
    const bodyIncludesSearchText = post.body
      .toLowerCase()
      .includes(lowerCaseSearchText);
    const numberIncludesSearchText = post.id.toString().includes(searchText);
    return (
      titleIncludesSearchText ||
      bodyIncludesSearchText ||
      numberIncludesSearchText
    );
  });

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <PostsStyled>
      <h1>Посты</h1>
      <input
        type="text"
        className="input__search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Поиск по тексту или числу"
      />
      {isLoading ? (
        <h1>Загрузка...</h1>
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <Post key={post.id} {...post} />)
      ) : (
        <h2>Нет результатов поиска</h2>
      )}
    </PostsStyled>
  );
};

export default Posts;
