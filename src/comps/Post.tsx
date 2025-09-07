import "../compsCss/Post.css";
import postData from "../data.json";

export default function Post() {
  return (
    <div className="container-post">
      {postData.map((i) => (
        <div key={i.id} className="post-single" >
          <img src={i.src} alt="post img" width={"40%"} height={"40%"} />
          <p>Description: {i.description}</p>
          <p>Likes: {i.likes}</p>
          <p>Name of the person posting the post: {i.name}</p>
          <p>The event is scheduled for {i.date} </p>
        </div>
      ))}
    </div>
  );
}
