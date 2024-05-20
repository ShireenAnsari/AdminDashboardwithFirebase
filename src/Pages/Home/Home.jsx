import React from 'react';
import './Home.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';
import Charts from '../../components/charts/Charts';
import Featured from '../../components/featured/Featured';
import TablesCompo from '../../components/table/Table';
const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
       <div className='widgets'>
        < Widgets type='user'/>
        < Widgets type='order'/>
        < Widgets type='earning'/>
        < Widgets type='balance'/>
       </div>
       <div className="charts">
       <Featured/>
        <Charts/>
       </div>
       <div className="listContainer">
        <div className="listitem">
          Latest Transactions
        </div>
      <TablesCompo/>
       </div>
       </div>
    </div>
  )
}

export default Home