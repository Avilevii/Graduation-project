import { useState } from "react";
import "../../compsCss/AddPost.css";

export default function AddPost() {
  const [formData, setFormData] = useState({
    id: "",
    imgId: "",
    description: "",
    likes: "",
    name: "",
  });
  const [massege, setMasseg] = useState("");
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const res = await fetch("http://localhost:3000/posts/createPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    setMasseg(result.msg);
  }
  return (
    <div className="container-create-post">
      <form className="form-create-post">
        <input
          type="text"
          name="id"
          placeholder="enter id"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imgId"
          placeholder="enter imgId"
          value={formData.imgId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="enter description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="likes"
          placeholder="enter likes"
          value={formData.likes}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit" className="btn-creat-post">
          Submit
        </button>
      </form>
      <p>{massege}</p>
    </div>
  );
}
