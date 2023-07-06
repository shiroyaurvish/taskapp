
import { useState, useEffect } from "react";
import { AUTHOR_LIST } from "../../Constants/Constants";

const useAuthor = (id) => {
  const [authors, setAuthors] = useState({});

  //get data from api
  useEffect(() => {
    getAuthorInfo();
  }, [id]);

  async function getAuthorInfo() {
    const data = await fetch(AUTHOR_LIST + id);
    const json = await data.json();
    // console.log(json)
    setAuthors(json);
  }

  return authors;
};

export default useAuthor;
