import React from 'react'
import './Charts.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts';
const Charts = () => {
  
const data = [
{name:'January',Total:1200},
{name:'Febryuary',Total:2100},
{name:'March',Total:800},
{name:'April',Total:1600},
{name:'May',Total:900},
{name:'June',Total:1700}

];
  return (
    <div className='chart'>
      <div className="title">Last 6 Months (Revenue)</div>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
  <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
    </div>
  )
}

export default Charts