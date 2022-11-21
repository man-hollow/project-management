import * as React from 'react';
import {FaChevronDown} from 'react-icons/fa'
import './Dropdown.css';

const Dropdown = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <div className='back-Drop-Down'>
      <i class="fa fa-chevron-down" onMouseOver={handleOpen} onMouseOut={handleOpen} aria-hidden="true"></i>
      </div>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button className='btn'>Menu 1</button>
          </li>
          <li className="menu-item">
            <button className='btn'>Menu 2</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div></div>}
    </div>
  );
};

export default Dropdown;