import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div>
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    {/* we add username and profile image later */}
                    <p>Hey user</p>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink exact to='/'><i class="fa fa-dashboard img"></i><span>Dashboard</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'><i class="fa fa-plus img"></i><span>New Project</span></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
