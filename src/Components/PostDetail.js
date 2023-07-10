import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { COMMENT_DETAIL, POST_DETAIL } from "../Constants/Constants";
import PostInfo from "./PostInfo";

const PostDetail = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostInfo();
    getCommentInfo();
  }, []);

  async function getPostInfo() {
    try{
    const data = await fetch(POST_DETAIL + id);
    const json = await data.json();
    setPosts(json);
  }catch(err){
    console.log(err);
  }
  }

  async function getCommentInfo() {
    const data2 = await fetch(COMMENT_DETAIL + id);
    const json2 = await data2.json();
    setComments(json2);
  }

  return (
    <PostInfo posts={posts} comments={comments}/>
  );
};

export default PostDetail;


