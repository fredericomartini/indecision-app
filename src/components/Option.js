import React from 'react';

const Option = (props) => (
  <div>
    <li>
      {props.title}
      <button
        onClick={(event) => {
          props.handleDeleteOne(props.title);
        }}
      >
        {' '}
        Remove
      </button>
    </li>
  </div>
);

export default Option;
