import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useAuthor from "./utils/useAuthor";
import { AUTHOR_POST } from "../Constants/Constants";
import moment from "moment/moment";
import "./AuthorDetail.css";
import AuthorPersonalInfo from "./AuthorPersonalInfo";

const AuthorHeader = () => {
  console.log("Author Header-->")
  return (
    <div>
      <h1>Author Detail</h1>
    </div>
  );
};

const AuthorDetail = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Featured");

  useEffect(() => {
    getPosts();
  }, [selectedSort]);

  async function getPosts() {
    const data = await fetch(AUTHOR_POST + id);
    const json = await data.json();
    let sortedPosts = [...json];
    switch (selectedSort) {
      case "date-oldesttolatest":
        sortedPosts.sort(
          (a, b) =>
            moment(a.datePublished).valueOf() -
            moment(b.datePublished).valueOf()
        );
        break;
      case "date-latesttooldest":
        sortedPosts = json.sort(
          (a, b) =>
            moment(b.datePublished).valueOf() -
            moment(a.datePublished).valueOf()
        );
        break;
      case "like-hightolow":
        sortedPosts = json.sort((a, b) => b.numLikes - a.numLikes);
        break;
      case "like-lowtohigh":
        sortedPosts = json.sort((a, b) => a.numLikes - b.numLikes);
        break;
      default:
        sortedPosts = json;
        break;
    }
    setPosts(sortedPosts);
  }

  const authors = useAuthor(id);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div>
      <div>
        <AuthorHeader/>
        <AuthorPersonalInfo authors={authors}/>
      </div>
      <div>
        <h1>Post List:</h1>
        <div>
          <label for="posts">Sort by:</label>
          <select
            name="posts"
            id="posts"
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option value="Featured">Featured</option>
            <option value="date-oldesttolatest">
              Date Published: Oldest to Latest
            </option>
            <option value="date-latesttooldest">
              Date Published: Latest to Oldest{" "}
            </option>
            <option value="like-hightolow">Likes: High to Low</option>
            <option value="like-lowtohigh">Likes: Low to High</option>
          </select>
        </div>
        {posts.map((item, id) => {
          return (
            <Link key={id} to={"/authors/posts/" + item.id}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorDetail;
