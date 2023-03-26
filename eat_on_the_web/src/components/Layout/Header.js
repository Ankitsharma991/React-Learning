import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <span style={{color:'red'}}>Eat</span>
          <span style={{color:'orange'}}>On</span>
          <span style={{color:'green'}}>The</span>
          <span style={{color:'wheat'}}>Web</span>
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;

// https://tasks-4f39d-default-rtdb.firebaseio.com/meals.json