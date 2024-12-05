"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  selectTitleFilter,
  setAuthorFilter,
  setTitleFilter,
  setOnlyFavoriteFilter
} from "@/app/redux/slices/filterSlices";
import "./Filter.css";
import { memo } from "react";

const Filter = memo(() => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            value={titleFilter}
            onChange={(e) => dispatch(setTitleFilter(e.target.value))}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            value={authorFilter}
            onChange={(e) => dispatch(setAuthorFilter(e.target.value))}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="">
            <input type="checkbox" checked={onlyFavoriteFilter} onChange={(e) => dispatch(setOnlyFavoriteFilter())}/>
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={() => dispatch(resetFilters())}>
          Reset Filter
        </button>
      </div>
    </div>
  );
});

export default Filter;
