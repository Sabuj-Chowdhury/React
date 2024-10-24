import { useEffect, useState } from "react";
import Post from "./Post";
function Posts() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h3>Post : {posts.length}</h3>
      {posts.map((post) => {
        <Post post={post}></Post>;
      })}
    </div>
  );
}
export default Posts;
