import './Collapse.css'
import { useState } from 'react';
import arrow from "../assets/arrow.svg"

const Collapse = ({ title, children }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div className='collapse'>
      <span className='title'>{title}toto</span>
      <img src={arrow} alt="fléche" className='arrow' onClick={() => setCollapsed(!isCollapsed)} />
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
};

export default Collapse;