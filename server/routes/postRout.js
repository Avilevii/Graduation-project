import express from 'express';
import {resCreatePost, resGetAllPosts, resPostById} from "../ctrls/postCtrl.js"

const router = express.Router();

router.get('/getAllPosts', resGetAllPosts);
router.get('/getPostById/:id',resPostById);
router.post('/createPost',resCreatePost);
// router.put('/updatePost/:id',);
// router.delete('/deletPost/:id',)


export default router;