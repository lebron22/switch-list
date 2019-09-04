import React from "react";

const PostsPerPageSelect = ({ setNumberOfPostsPerPage }) => {
  return (
    <div>
      <label htmlFor="posts-select">Posts per page: </label>
      <select
        className="select"
        id="posts-select"
        onChange={e => setNumberOfPostsPerPage(e.target.value)}
      >
        <option className="select__option" value="5">
          5
        </option>
        <option className="select__option" value="8">
          8
        </option>
        <option className="select__option" value="10">
          10
        </option>
      </select>
    </div>
  );
};

export default PostsPerPageSelect;
