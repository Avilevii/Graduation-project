import postsData from './posts.json' with { type: 'json' };
import fs from 'fs';
// מביא את כל הפוסטים
export function getAllPosts(){
    return postsData;
}

// מביא את הפוסט לפי id;
export function getPostById(id){
    
        const postId = postsData.find(f => parseInt(f.id) === id);
        if(postId) return postId;
        else{
            return;
        }
}

// הוספת פוסט
export function createPost(){
    const dataJson = JSON.parse(fs.readFileSync('posts.json'));
    const newData = {id: 1};
    data.push(newData);

    fs.writeFileSync('posts.json', JSON.stringify(data, null, 2))
    // const postId = postsData.find(f => f.id === body.id)
    // if(postId)return;
        

    // console.log('The post added to list')
    
     
    //  console.log(postsData);

}

createPost();

