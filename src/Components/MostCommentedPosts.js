import React, { useEffect, useState } from "react";
import { POSTS } from "../Constants/Constants";
import { Link } from "react-router-dom";

const MostCommentedPosts = () => {
  const [mostCommentedPosts, setMostCommentedPosts] = useState([]);

  useEffect(() => {
    getMostCommentedPosts();
  }, []);

  async function getMostCommentedPosts() {
    const data = await fetch(POSTS);
    const json = await data.json();
    setMostCommentedPosts(json);
  }
  return (
    <div>
      <h1>Top 10 Most Commented Posts</h1>
      <ul>
        {mostCommentedPosts
          .sort((x, y) => y.numComments - x.numComments)
          .slice(0, 10)
          .map((post) => (
            <Link  key={post.id} to={"/authors/posts/" + post.id}>
              <li>
                {post.title}-{post.numComments}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default MostCommentedPosts;
