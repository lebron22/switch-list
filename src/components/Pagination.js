import React from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  postsPerPage,
  totalPosts
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    const buttonClassName =
      number === currentPage ? "button-primary active" : "button-primary";
    return (
      <li className="pagination__item" key={number}>
        <button
          className={buttonClassName}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      </li>
    );
  });

  return <ul className="pagination">{renderPageNumbers}</ul>;
};

export default Pagination;
