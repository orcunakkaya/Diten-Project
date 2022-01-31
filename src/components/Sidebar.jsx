import React from 'react';
import { useSelector } from 'react-redux';

function Sidebar() {
    const toggle = useSelector(state => state.toggle)

  return (
      <div className={`sidebar ${toggle && "toggle-on"}`}>
          <div className='header'>
            <h1>Diten</h1>
            <i className="fab fa-react"></i>
          </div>
          <div className='sidebar__container'>
                <div className='sidebar__item'>
                    <div>Users</div>
                    <i className="fas fa-user"></i>
                </div>
                <div className='sidebar__item'>
                    <div>Logout</div>
                    <i className="fas fa-expand"></i>
                </div>
                <div className='sidebar__item'>
                    <div>E-Mail</div>
                    <i className="far fa-envelope"></i>
                </div>
                <div className='sidebar__item'>
                    <div>Users</div>
                    <i className="fas fa-users"></i>
                </div>
                <div className='sidebar__item'>
                    <div>Logout</div>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
      </div>
  )
}

export default Sidebar;