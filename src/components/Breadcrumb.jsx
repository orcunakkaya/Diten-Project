import React from 'react';

function Breadcrumb() {
  return (
    <div className='breadcrumb'>
      <div className='breadcrumb__container'>
        <h2>Cardiology, A, Hospital-Policlinc</h2>
        <div>Marketing / Visit Mix / Cardiology, A, Hospital-Policlinc</div>
      </div>
      <div className='buttons'>
        <button><i className="fas fa-undo-alt"></i> back to page</button>
        <button><i className="fas fa-bullhorn"></i></button>
      </div>
    </div>
  );
}

export default Breadcrumb;
