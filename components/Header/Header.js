import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';


function Header(props) {
  return (
    <div className="header">
      <ul className={classes.list}>
        <li className={classes.item}>
          <a href="#" className={classes.link}>
            Home
          </a>
        </li>
        <li className={classes.item}>
          <a href="#" className={classes.link}>
            About us
          </a>
        </li>
        <li className={classes.item}>
          <a href="#" className={classes.link}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;