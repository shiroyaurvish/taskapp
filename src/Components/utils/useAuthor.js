import { useState, useEffect } from "react";
import { AUTHOR_LIST } from "../../Constants/Constants";

const useAuthor = (id) => {
  const [authors, setAuthors] = useState({});

  useEffect(() => {
    getAuthorInfo();
  }, []);

  async function getAuthorInfo() {
    try {
      const data = await fetch(AUTHOR_LIST + id);
      const json = await data.json();
      setAuthors(json);
    } catch (err) {
      console.log(err);
    }
  }

  return authors;
};

export default useAuthor;
