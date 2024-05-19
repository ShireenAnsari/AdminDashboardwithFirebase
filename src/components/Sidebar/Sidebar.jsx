import React from 'react'
import './Sidebar.scss'
import { AccountBoxOutlined, Chair, Dashboard, Inventory2, LocalShipping, LogoDev, Logout, Person2, QueryStats, Settings, SystemSecurityUpdate, Notifications } from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">
            ShiriAdmin
            </span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className='title'>Main</p>
                <li><span><Dashboard className='icon'/> Dashboard</span></li>
                <p className="title">LISTS</p>
                <li><span><Person2 className='icon'/> Users</span></li>
                <li><span><Inventory2 className='icon'/> Products</span></li>
                <li><span><Chair className='icon'/> Orders</span></li>
                <li><span> <LocalShipping className='icon'/>Delievery</span></li>
                <p className="title">USEFUL</p>
                <li><span><QueryStats className='icon'/>Stats</span></li>
                <li><span><Notifications className='icon'/> Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><span><SystemSecurityUpdate className='icon'/> System Health</span></li>
                <li><span><LogoDev className='icon'/> Logs</span></li>
                <li><span><Settings className='icon'/> Settings</span></li>
                <p className="title">USER</p>
                <li><span><AccountBoxOutlined className='icon'/> Profiles</span></li>
                <li><span><Logout className='icon'/> Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions">
            </div>
            <div className="colorOptions">
            </div>
        </div>
    </div>
  )
}

export default Sidebar