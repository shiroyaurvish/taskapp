import React, { useState, useEffect } from "react";
import { AUTHOR_LIST } from "../Constants/Constants";
import "./Authors.css"
import { Link } from "react-router-dom";
import AuthorList from "./AuthorList";
import PageButton from "./PageButton";

const Authors = () => {
  const [allAuthor, setAllAuthor] = useState([]);
  const [authorsPerPage, setAuthorsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getAuthor();
  }, []);

  const noOfTotalPages = Math.ceil(allAuthor.length/authorsPerPage);
  const pages = [...Array(noOfTotalPages + 1).keys()].slice(1);

  const indexOfLastAuthor = currentPage * authorsPerPage;
  const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;

  const visibleAuthor = allAuthor.slice(indexOfFirstAuthor,indexOfLastAuthor )

  const prevPageHandler = () => {
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const nextPageHandler = () => {
    if(currentPage !== noOfTotalPages) setCurrentPage(currentPage + 1)
  }

  const handleAuthorsPerPageChange = (e) => {
    setAuthorsPerPage(e.target.value);
  };

  async function getAuthor() {
    try{
    const data = await fetch(AUTHOR_LIST);
    const json = await data.json();
    setAllAuthor(json);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <select onChange={handleAuthorsPerPageChange}>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <h1>AuthorList</h1>
    <div>
      <div className="authors">
      {visibleAuthor.map(function (item, id) {
        return (
          <Link to={"/authors/"+item.id} key={item.id}>
            <AuthorList  item={item} />
          </Link>
        );
      })}
      </div>
      <div>
      <PageButton onClick={prevPageHandler} name="Prev" />
      <PageButton onClick={nextPageHandler} name="Next" />
      </div>
      <p>
        {
          pages.map((page)=>(
            <span key={page} className={`${currentPage === page  ? "active" : "page-box "}`} onClick={()=>setCurrentPage(page)}>{`${page} | `}</span>
          ))
        }
      </p>
    </div>
    </>
  );
};

export default Authors;
