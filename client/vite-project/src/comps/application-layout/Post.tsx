import "../../compsCss/Post.css";
// import postData from "../../data.json";
import { usePosts } from "./allposts";
import { useNavigate } from 'react-router-dom';




export default function Post() {
  const navigate = useNavigate()
  const {loading, posts} = usePosts();
  if(loading) return <p className="loading">loading...</p>;

  return (
    <div className="container-post">
      {posts.map((i) => (
        <div key={i.id} className="post-single" onClick={() => navigate(`/postPage`, {state:{i}})} >
          <img src={`http://localhost:3000/${i.imgId}`} alt="post img" width={"40%"} height={"40%"} />
          <p>Description: {i.description}</p>
          <p>Likes: {i.likes}</p>
          <p>Name: {i.name}</p>
          <p> {i.date} </p>
        </div>
      ))}
    </div>
  );
}