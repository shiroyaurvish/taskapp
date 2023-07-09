import React, { useEffect, useState } from "react";
import { POSTS } from "../Constants/Constants";
import { Link } from "react-router-dom";

const MostLikedPosts = () => {
  const [mostLikedPosts, setMostLikedPosts] = useState([]);

  useEffect(() => {
    getMostLikedPosts();
  }, []);

  async function getMostLikedPosts() {
    const data = await fetch(POSTS);
    const json = await data.json();
    setMostLikedPosts(json);
  }
  return (
    <div>
      <h1>Top 10 Most Liked Posts</h1>
      <ul>
        {mostLikedPosts
          .sort((x, y) => y.numLikes - x.numLikes)
          .slice(0, 10)
          .map((post) => (
            <Link key={post.id} to={"/authors/posts/"+post.id}>
            <li >{post.title}-{post.numLikes}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default MostLikedPosts;
