import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats'
import Stopwatch from './Stopwatch';

const Header = ({players, title}) => {
    return (
      <header>
        <Stats players={players} />
        <h1>{ title }</h1>
        <Stopwatch/>
      </header>
    );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = { // defaultProps will make sure that props.title will have a value if it's not specified by the parent component
  title: 'Scoreboard'
};

export default Header;