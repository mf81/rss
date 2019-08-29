import React, { Component } from "react";
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

  if (pagesCount !== 1) {
    return (
      <React.Fragment>
        <Pages
          itemsCount={itemsCount}
          pageSize={pageSize}
          onPageChange={onPageChange}
          onPriv={onPriv}
          onNext={onNext}
          currentPage={currentPage}
          onPageSize={onPageSize}
        />
        <PageSize pageSize={pageSize} onPageSize={onPageSize} />
      </React.Fragment>
    );
  } else {
    return <PageSize pageSize={pageSize} onPageSize={onPageSize} />;
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
