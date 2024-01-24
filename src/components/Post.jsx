import styled from "styled-components";

export default function Post(props) {
  const PostStyle = styled.div`
    max-width: 50%;
    margin: 25px auto;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  `;
  const { id, title, userId, body } = props;
  return (
    <PostStyle>
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User ID: {userId}</h3>
    </PostStyle>
  );
}
