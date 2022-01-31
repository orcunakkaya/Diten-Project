import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Main from './Main';
import {useSelector} from 'react-redux';

function Container() {
  const toggle = useSelector(state => state.toggle);

  return (
      <div className={`content-container ${toggle && "content-toggle"}`}>
        <Breadcrumb/>
        <Main />
      </div>
  )
}

export default Container;
