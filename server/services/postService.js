import postsData from '../posts.json' with { type: 'json' };
import fs from 'fs';
import { writeFile } from 'fs/promises';


// מביא את כל הפוסטים
export function getAllPosts(){
    return postsData;
}

// מביא את הפוסט לפי id;
export function getPostById(id){
    
        const postId = postsData.find(f => f.id === parseInt(id));
        if(postId) return postId;
        else{
            return;
        }
}

// הוספת פוסט
export async function createPost(body){
        const postId = postsData.find(f => f.id === body.id)
        if(postId){return false}


        postsData.push(body);
        console.log(postsData);
    try{
     await writeFile('../server/posts.json', JSON.stringify(postsData, null, 2));
        console.log(postsData)
                console.log('New post added and posts.json updated successfully.');
        return true
    }
    catch(err){
        console.error("Error reading file", err)
    }
}

export function dateTime(){
    const dt = new Date();
    const datatime = dt.getDate() + "." + (dt.getMonth() + 1) + "." + dt.getFullYear() + "  " + dt.getHours() + ":" + dt.getMinutes();
    return datatime;
}



