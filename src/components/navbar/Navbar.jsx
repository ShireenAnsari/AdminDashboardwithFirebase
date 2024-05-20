import React from 'react'
import './Navbar.scss'
import { DarkMode, LanguageOutlined, Search,Notifications, FullscreenExit, ListOutlined, ChatBubbleOutline } from '@mui/icons-material'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <Search/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className='icon'/>
            English
          </div>
          <div className="item">
            <DarkMode className='icon'/>
          </div>
          <div className="item">
            <FullscreenExit className='icon'/>
          </div>
          <div className="item">
            <Notifications className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className='icon'/>
          </div>
          <div className="item">
            <img src="/avatar.png" className='avatar' alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar