import { useState } from "react";
import '../compsCss/getPost.css'


export default function GetPostById() {
  type Post = {
    id: number;
    imgId: string;
    description: string;
    likes: string;
    name: string;
    date: string;
  };

  const [post, setPost] = useState<Post | null>(null);
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //  const idIn = Number(inputId);
    try {
      const res = await fetch(
        `http://localhost:3000/posts/getPostById/${inputId}`
      );
      if (!res.ok) {
        const errorData = await res.json();
        return setError(errorData.msg);
      }
      const data = await res.json();

      setPost(data);
      setInputId('');
      setError('');
    } catch (err) {
        setError("Error from server")
      console.error("Error", err);
    }
  }

  return (
    <div className="getPost-container">
      <form onSubmit={handleSubmit} className="form-input">
        <input
          type="text"
          className="form-input"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="enter id"
        />
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
 
        { post && !error &&
          <div key={post?.id} className="post-single">
            <img
              src={`http://localhost:3000/${post?.imgId}`}
              alt="post img"
              width={"40%"}
              height={"40%"}
            />
            <p>Description: {post?.description}</p>
            <p>Likes: {post?.likes}</p>
            <p>Name: {post?.name}</p>
            <p> {post?.date} </p>
          </div>
        }
        {error && <p>{error}</p>}
      </div>
  );
}
