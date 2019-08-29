import React, { Component } from "react";
const PageSize = props => {
  const { pageSize, onPageSize } = props;
  const pageSizeNew = [5, 10, 15, 20, 50, 100];
  return (
    <div class="row justify-content-md-center">
      <nav aria-label="Page navigation 2">
        <ul class="pagination">
          {pageSizeNew.map(p => (
            <li
              class={pageSize === p ? "page-item active" : "page-item"}
              key={p}
            >
              <a
                class="page-link"
                style={{ cursor: "pointer" }}
                onClick={() => onPageSize(p)}
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PageSize;
