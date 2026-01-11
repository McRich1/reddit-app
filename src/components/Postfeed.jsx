import React, { useState, useEffect } from 'react';

function PostFeed (){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async () => {
        const response = await fetch('https://www.reddit.com/r/popular.json');
        if(!response.ok){
            throw new Error (`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const postData = data.data.children.map(child =>({
            id: child.data.id,
            title: child.data.title,
            url: child.data.url,
            author: child.data.author,
            score: child.data.score,
            thumbnail: child.data.thumbnail,
        }));
        setPosts(postData);
    }
    fetchPosts();
  }, []);
  return (
   <div>
        <h2>Reddit Posts</h2>
        {posts.map(post =>(
            <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
            <p>Author: {post.author}</p>
            <p>Score: {post.score}</p>
            {post.thumbnail && (
            <img src={post.thumbnail} alt="Thumbnail" style={{maxWidth: "100px", maxHeight:"100px"}} />
                )}
            </div>
        ))} 
   </div>
 );
}

export default PostFeed;


