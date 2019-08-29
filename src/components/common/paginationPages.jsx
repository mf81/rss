import React, { Component } from "react";
import _ from "lodash";

const Pages = props => {
  const {
    itemsCount,
    pageSize,
    onPageChange,
    currentPage,
    onPriv,
    onNext
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  console.log("ItemsCount", itemsCount);
  console.log("pageSize", pageSize);
  console.log("Strony", pages);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <a
            className="page-link "
            onClick={() => onPriv()}
            style={{ cursor: "pointer" }}
          >
            Poprzednia
          </a>
        </li>
        {pages.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a
              className="page-link"
              key={page}
              onClick={() => onPageChange(page)}
              style={{ cursor: "pointer" }}
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage === pages.length ? "page-item disabled" : "page-item"
          }
        >
          <a
            className="page-link"
            onClick={() => onNext()}
            style={{ cursor: "pointer" }}
          >
            Następna
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pages;
