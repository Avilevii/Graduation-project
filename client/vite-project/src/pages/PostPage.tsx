
import { useLocation } from "react-router-dom";
import '../compsCss/postPage.css';

// דף להצגת פוסט לאחר לחיצה
export default function PostPage() {
    const location = useLocation();
    const {i} = location.state || {};
  return (
    <div className="post-container">
       <div className="post-single">
        <img src={`http://localhost:3000/${i.imgId}`} alt="post img" width={"40%"} height={"40%"} />
          <p>Description: {i.description}</p>
          <p>Likes: {i.likes}</p>
          <p>Name: {i.name}</p>
          <p> {i.date} </p>
       </div>
        </div>
  )
}
