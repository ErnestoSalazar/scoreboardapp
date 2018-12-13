import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({index, score, changeScore}) => {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=> changeScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
      </div>
    );
}

// to run type checking on the props for a component you assign it the propTypes property
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;