import React from "react";

const AuthorPersonalInfo1 = ({ keys, value }) => {
  return (
    <h3>
      {keys}:- {value}
    </h3>
  );
};

const AuthorPersonalInfo = ({ authors }) => {
  return (
    <div>
      <AuthorPersonalInfo1 keys={"Name"} value={authors.firstName + " " + authors.lastName} />
      <AuthorPersonalInfo1 keys={"Contact No"} value={authors.phone} />
      <AuthorPersonalInfo1 keys={"Total Comments"} value={authors.numComments} />
      <AuthorPersonalInfo1 keys={"Total Likes"} value={authors.numLikes} />
      <AuthorPersonalInfo1 keys={"Total Posts"} value={authors.numPosts} />
    </div>
  );
};

export default AuthorPersonalInfo;
