import './header.css'
import { useState } from 'react'
import { MenuOutlined, Close } from '@mui/icons-material'
import { ReactComponent as Logo } from './Vector.svg'

const Header = () => {
 
  //function to toggle sidebar on and off for smaller screen size
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <header className='header__container'>        
        <div className='header__logo'>
          <Logo/>
            <h4>Artisto</h4>
         </div>
         <div className='header__menu' onClick={()=>setShowSidebar(true)}>
          <MenuOutlined/>
         </div>
         <div className={showSidebar? 'header__options__sidebar sidebar__active' : 'header__options__sidebar'}>
          <div onClick={()=>setShowSidebar(false)}>
            <Close/>
          </div>
            <p>Event</p>
            <p>Museum</p>
            <p>Arts</p>
            <p>Gallery</p>
            <p> Login</p>
            <p>Explore Arts</p> 
         </div>
         <div className='header__options'>
            <p>Event</p>
            <p>Museum</p>
            <p>Arts</p>
            <p>Gallery</p>
            <div className='header__login'>
               <p> Login</p>
            </div>
            <div className='header__explore'>
            <p>Explore Arts</p> 
            </div>
         </div>
    </header>
  )
}

export default Header