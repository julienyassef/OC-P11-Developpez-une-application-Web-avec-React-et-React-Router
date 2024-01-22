import './Collapse.css';
import { useState } from 'react';
import arrow from "../assets/arrow.svg";

const Collapse = ({ title, information, equipements }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div className='collapse'>
      <div className='banner-collapse'>
        <span className='title'>{title}</span>
        <img
          src={arrow}
          alt="flèche"
          className={`arrow ${isCollapsed ? '' : 'rotate'}`}
          onClick={() => setCollapsed(!isCollapsed)}
        />
      </div>
      {information && !isCollapsed && <div className='information'>{information}</div>}
      {equipements && !isCollapsed && <ul className='information'>{equipements.map((equipement) => (
        <li>{equipement}</li>
      ))}</ul>}
      </div>
  );
};

export default Collapse;
