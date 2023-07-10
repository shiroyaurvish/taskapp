import React from "react";
import { Link } from "react-router-dom";

export const PostInfo1 = ({ keys, value }) => {
  return (
    <h2>
      {keys} :- {value}
    </h2>
  );
};

const PostInfo = ({ posts, comments }) => {
  return (
    <div>
      <h1>PostTitle :- {posts[0]?.title}</h1>
      <p>Description :- {posts[0]?.description}</p>
      <PostInfo1 keys={"Likes"} value={posts[0]?.numLikes} />
      <PostInfo1 keys={"Comments"} value={posts[0]?.numComments} />
      <h3>
        Comment List :-
        {comments.map((item) => {
          return (
            <div key={item.id}>
              <Link to={"/authors/" + item.authorId}>
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

export default PostInfo;
