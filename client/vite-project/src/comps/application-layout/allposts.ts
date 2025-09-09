import { useEffect, useState } from "react";

export function usePosts() {
  type Post = {
    id: number;
    img: string;
    description: string;
    likes: string;
    name: string;
    date: string;
  };
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        async function fetchPosts(){
            try{
                const res = await fetch(`http://localhost:3000/posts/getAllPosts`);
            if(!res.ok){
                 throw new Error(`Response status: ${res.status}`);
            }
            
            const result = await res.json();
            setPosts(result.allPosts);            
            setLoading(false);
            }
            catch(err){
                console.error('Error from fetch AllPost!', err)
            }
                       
        }
        fetchPosts();
    }, []) 
    return{loading, posts};
}
