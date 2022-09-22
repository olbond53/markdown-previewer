import React from 'react';
import './css/Toolbar.css';

const Toolbar = ({ name, icon, onHandleClick }) => {
  return (
    <div className="toolbar">
      <div>{name}</div>
      <div onClick={onHandleClick}>{icon}</div>
    </div>
  );
};

export default Toolbar;
