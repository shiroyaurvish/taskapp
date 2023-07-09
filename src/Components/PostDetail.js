import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { COMMENT_DETAIL, POST_DETAIL } from "../Constants/Constants";

const PostDetail = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostInfo();
    getCommentInfo();
  }, []);

  async function getPostInfo() {
    const data = await fetch(POST_DETAIL + id);
    const json = await data.json();
    setPosts(json);
  }

  async function getCommentInfo() {
    const data2 = await fetch(COMMENT_DETAIL + id);
    const json2 = await data2.json();
    setComments(json2);
  }

  return (
    <div>
      <h1>PostTitle :- {posts[0]?.title}</h1>
      <p>Description :- {posts[0]?.description}</p>
      <h2>Likes :- {posts[0]?.numLikes}</h2>
      <h2>Comments :- {posts[0]?.numComments}</h2>
      <h3>
        Comment List :-
        {comments.map((item) => {
          return (
            <div key={item.id}>
              <Link to={"/authors/"+item.authorId}>
                <h6>Author id:- {item?.authorId}</h6>
              </Link>
              <h5>Text :- {item?.text}</h5>
            </div>
          );
        })}
      </h3>
    </div>
  );
};

export default PostDetail;


