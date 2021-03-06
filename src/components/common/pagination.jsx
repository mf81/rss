import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Pages from "./paginationPages";
import PageSize from "./paginationPageSize";

const Pagination = props => {
  const {
    itemsCount,
    pageSize,
    onPageChange,
    currentPage,
    onPriv,
    onNext,
    onPageSize
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount !== 1) {
    return (
      <div className="container">
        <Pages
          onPageChange={onPageChange}
          onPriv={onPriv}
          onNext={onNext}
          currentPage={currentPage}
          onPageSize={onPageSize}
          pagesCount={pagesCount}
        />
        <PageSize pageSize={pageSize} onPageSize={onPageSize} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <PageSize pageSize={pageSize} onPageSize={onPageSize} />
      </div>
    );
  }
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPriv: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPageSize: PropTypes.func.isRequired
};

export default Pagination;
