import React from 'react';

const QustionList = ({ question, options, handleClick, currentAns }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li 
            key={index} 
            onClick={() => handleClick(option)} 
            className={currentAns === option ? 'selected' : ""}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QustionList;
