import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useAuthor from "./utils/useAuthor";
import { AUTHOR_POST } from "../Constants/Constants";
import moment from "moment/moment";

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
    // console.log(json)
    let sortedPosts = [...json];
    switch (selectedSort) {
      case "date-oldesttolatest":
        sortedPosts.sort(
          (a, b) =>
            moment(a.datePublished).valueOf() -
            moment(b.datePublished).valueOf()
        );
        // sortedPosts = json.sort((a, b) => moment((a.datePublished)).format('MMMM Do YYYY, h:mm:ss a') - moment((b.datePublished)).format('MMMM Do YYYY, h:mm:ss a'));
        // sortedPosts = json.sort((a, b) => console.log(moment(a.datePublished).valueOf() - moment(b.datePublished).valueOf()));
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
        <h1>Author Detail</h1>
        <h3>Name :- {authors.firstName + " " + authors.lastName}</h3>
        <h3>Contact No:- {authors.phone}</h3>
        <h3>Total Comments:- {authors.numComments}</h3>
        <h3>Total Likes:- {authors.numLikes}</h3>
        <h3>Total Posts:- {authors.numPosts}</h3>
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
            <Link key={id} to={"/authors/posts/"+item.id}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorDetail;
