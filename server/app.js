import express from 'express';
import postRout from './routes/postRout.js';

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.static('public'));

app.use('/posts', postRout);


app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`)
});





