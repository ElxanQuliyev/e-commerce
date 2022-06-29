import React from 'react'
import { useSelector } from 'react-redux'

const Layout = ({children}) => {
    const myColor=useSelector(state=>state.colorInfo)
  return (
    <div style={{background:myColor.color,minHeight:"100vh"}}>
        {children}
    </div>
  )
}

export default Layout