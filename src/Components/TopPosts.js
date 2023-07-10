import React, { useEffect, useState } from "react";
import { POSTS } from "../Constants/Constants";
import { Link } from "react-router-dom";

const TopPosts = ({ type }) => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    getTopPosts();
  }, []);

  async function getTopPosts() {
    const data = await fetch(POSTS);
    const json = await data.json();
    setTopPosts(json);
  }

  const sortByType = (x, y) => {
    if (type === "comments") {
      return y.numComments - x.numComments;
    } else if (type === "likes") {
      return y.numLikes - x.numLikes;
    }
    return 0;
  };

  const getPostLink = (post) => {
    return `/authors/posts/${post.id}`;
  };

  return (
    <div>
      <h1>Top 10 Most {type === "comments" ? "Commented" : "Liked"} Posts</h1>
      <ul>
        {topPosts
          .sort(sortByType)
          .slice(0, 10)
          .map((post) => (
            <Link key={post.id} to={getPostLink(post)}>
              <li>
                {post.title} - {type === "comments" ? post.numComments : post.numLikes}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default TopPosts;
