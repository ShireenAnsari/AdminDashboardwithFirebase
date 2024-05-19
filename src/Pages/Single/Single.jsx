import React from 'react'
import './single.scss'
import { useParams } from 'react-router-dom'
const Single = () => {
  const {userId}=useParams()
  return (
    <div>Single- {userId}</div>
  )
}

export default Single