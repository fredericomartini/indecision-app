import React from 'react';
import Option from './Option';

const Options = (props) => {
  const { options } = props;
  return (
    <div>
      <p>
        Your Options
        <button onClick={props.handleDeleteOptions}>Remove All</button>
      </p>
      {options && (
        <div className="options">
          {options.map((option, index) => (
            <Option key={index} title={option} handleDeleteOne={props.handleDeleteOne} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Options;
