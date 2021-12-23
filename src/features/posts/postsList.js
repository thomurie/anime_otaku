import { useSelector } from "react-redux";

const PostsList = () => {
  const currentPosts = useSelector((state) => state.posts);
  return (
    <ul>
      {currentPosts.map((p) => (
        <>
          <h1>{p.title}</h1>
          <p>{p.content}</p>
        </>
      ))}
    </ul>
  );
};

export default PostsList;
