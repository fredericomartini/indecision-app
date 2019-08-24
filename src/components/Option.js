import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}
.
      {props.title}
    </p>
    <button
      className="button button--link"
      onClick={(event) => {
        props.handleDeleteOne(props.title);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
