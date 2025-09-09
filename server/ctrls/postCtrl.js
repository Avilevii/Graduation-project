import {
  getAllPosts,
  getPostById,
  createPost,
} from "../services/postService.js";

// פונקציה שמביא ללקוח את כל הפוסטים
export function resGetAllPosts(req, res) {
  try {
    const allPosts = getAllPosts();
    res.status(200).json({ allPosts });
  } catch (err) {
    console.erroe("Error from getAllPosts", err);
  }
}

// פונקציה שמחזירה ללקוח את הפוסט לפי מזהה אם קיים
export function resPostById(req, res) {
  const postId = req.params.id;
  if (!postId) return res.status(500).json({ msg: "You must enter value!" });
  try {
    const post = getPostById(postId);

    res.status(200).json(post);
  } catch (err) {
    console.error("Error", err);
  }
}

export function resCreatePost(req, res) {
  const { id, img, description, likes, name } = req.body;
  if (!id || !description || !likes || !name)
    return res.status(500).json({ msg: "You must enter all fields" });
  try {
    const body = {
      id,
      // img,
      description,
      likes,
      name,
      date: new Date(),
    };
    createPost(body);
    return res.status(200).json({ msg: "post added" });
  } catch (err) {
    console.error("Error from server", err);
    return res.status(500).json({ msg: "Error from server" });
  }
}
