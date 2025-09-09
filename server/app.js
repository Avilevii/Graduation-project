import express from "express";
import postRout from "./routes/postRout.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

app.use("/posts", postRout);

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
