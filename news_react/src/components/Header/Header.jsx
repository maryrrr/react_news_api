import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'


export const Header = () => {
  return (
    
    <nav className="menu-nav">
        <ul className='menu-nav__list'>
            <li className='menu-nav__list-item'>
              <Link to='/' className='menu-nav__link'>Home</Link>
              </li>
            <li className='menu-nav__list-item'>
              <Link to='../User' className='menu-nav__link'>Form</Link>
              </li>
            <li className='menu-nav__list-item'>
              <Link to='/' className='menu-nav__link'>ListNews</Link>
              </li>

            
        </ul>
</nav>
  )
}

    
