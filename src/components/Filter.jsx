import React from 'react';

function Filter() {
    return (
        <div className='filter'>
            <div className='filter__options'>
                <div className='filter__option'>
                    <div className='filter__option-text'>product</div>
                    <div className='custom-select'>
                        <select defaultValue={"select"}>
                            <option value="select" disabled hidden>select</option>
                            <option value="item1">Item 1</option>
                            <option value="item2">Item 2</option>
                            <option value="item3">Item 3</option>
                            <option value="item4">Item 4</option>
                            <option value="item5">Item 5</option>
                        </select>
                    </div>
                </div>
                <div className='filter__option'>
                    <div className='filter__option-text'>indication</div>
                    <div className='custom-select'>
                        <select defaultValue={"select"}>
                            <option value="select" disabled hidden>select</option>
                            <option value="item1">Item 1</option>
                            <option value="item2">Item 2</option>
                            <option value="item3">Item 3</option>
                            <option value="item4">Item 4</option>
                            <option value="item5">Item 5</option>
                        </select>
                    </div>
                </div>
                <div className='filter__option'>
                    <div className='filter__option-text'>profile</div>
                    <div className='custom-select'>
                        <select defaultValue={"select"}>
                            <option value="select" disabled hidden>select</option>
                            <option value="item1">Item 1</option>
                        </select>
                    </div>
                </div>
                <div className='filter__option'>
                    <div className='filter__option-text'>promo subject</div>
                    <div className='custom-select'>
                        <select defaultValue={"select"}>
                            <option value="select" disabled hidden>select</option>
                            <option value="item1">Item 1</option>
                        </select>
                    </div>
                </div>
                <div className='filter__option'>
                    <div className='filter__option-text'>promo material</div>
                    <div className='custom-select'>
                        <select defaultValue={"select"}>
                            <option value="select" disabled hidden>select</option>
                            <option value="item1">Item 1</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='filter-bottom-buttons'>
                <button>apply</button>
                <button>calcel</button>
                <button><i className="fas fa-paint-brush"></i></button>
            </div>
        </div>
    )
}

export default Filter;
