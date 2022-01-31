import React from 'react';
import { sidebarToggle } from '../redux/actions/ditonActions';
import { useDispatch, useSelector } from 'react-redux';


function Navbar() {
    let toggle = useSelector((state) => state.toggle)
    let dispatch = useDispatch();

    const handleClick = () => {
        dispatch(sidebarToggle())
    }

  return (
      <div className='navbar'>
          <div className={`sidebar-toggle ${toggle && "sidebar-toggle-on"}`} onClick={handleClick}>
            <i className="fas fa-angle-double-right"></i>
          </div>
          <div className='nav-items'>
            <div className='nav-icon'>
                <i className="far fa-flag"></i>
            </div>
            <div className='nav-icon'>
                <i className="fas fa-shield-virus"></i>
            </div>
            <div className='nav-icon'>
                <i className="fas fa-vector-square"></i>
            </div>
            <div className='nav-icon notification'>
                <span className='badge'>3</span>
                <i className="far fa-bell"></i>
            </div>
            <div className='nav-icon'>
                <i className="fas fa-info"></i>
            </div>
            <div className='profile__container'>
                <img alt='profile' src='https://avatars.githubusercontent.com/u/66293052?v=4' className='profile__avatar'/>
                <div className='profile__name'>Berkay Akkaya</div>
                <i className="fas fa-angle-down profile__icon"></i>
            </div>
          </div>
      </div>
  );
}

export default Navbar;
