import React from 'react'
import{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './Navbar.css'
const Navbar = () => {
    const [isNavShowing,setIsNavShowing] =useState(false);
  return (
    <nav>
        <div className="container nav__container">
           <Link to='/' className='logo'>
                <h2>Phabias</h2>
           </Link>
           <div>
           <ul className={`nav__links ${isNavShowing? 'show__nav':'hide__nav'}`}>
                {
                    links.map(({name,path},index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=>isActive ? 'active-nav':''}
                                onClick={()=> setIsNavShowing(!isNavShowing)}
                                >{name}</NavLink>
                            </li>
                        )
                    })
                }
           </ul>
           <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(!isNavShowing)}>
            {
                isNavShowing? <MdOutlineClose/> :<GoThreeBars/>
            }</button>
            </div>
        </div>

    </nav>
  )
}

export default Navbar