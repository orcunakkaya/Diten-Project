import React, { useState } from 'react';
import Filter from './Filter';
function Search() {
    const [onClick, setOnClick] = useState(false);

    const handleClick = () => {
        setOnClick(!onClick)
    }

  return (
    <div className='search-l'>
        <div className='search'>
            <div className='search__container'>
                <input type="text" placeholder='search' />
                <button className='search__button'><i className="fas fa-search"></i></button>
            </div>
        <div className='button__container'>
            <button>send to approval</button>
            <button>pre-plan</button>
            <div className='icon-buttons'>
                <button className='i-btn'><i className="fas fa-compress"></i></button>
                <button className='i-btn'><i className="fas fa-external-link-alt"></i></button>
                <button className='i-btn'><i className="fas fa-inbox"></i></button>
            </div>
            <button className='filter-btn' onClick={handleClick}>
                <span className='filter-text'>filtre</span>
                <i className="fas fa-sort"></i>
            </button>
        </div>
        </div>
        {
            onClick === true && <Filter />
        }
    </div>
  )
}

export default Search;
