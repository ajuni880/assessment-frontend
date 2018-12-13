import React from 'react';
import { connect } from 'react-redux';
import { setNextPage } from '../actions/pagination';

const Pagination = ({ page, next, totalPages }) => (
  <div className="pagination">
    <div className="pagination__actions">
      <button className="btn btn-pagination" disabled={page <= 1} onClick={() => { next(page - 1) }}>&larr;</button>
      <span>{page}</span>
      <button className="btn btn-pagination" disabled={page + 1 > totalPages } onClick={() => { next(page + 1)}}>&rarr;</button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  page: state.pagination.page,
  totalPages: Math.ceil(state.people.people.length / 400)
});

const mapDispatchToProps = (dispatch) => ({
 next: (page) => dispatch(setNextPage(page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);