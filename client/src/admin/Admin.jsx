import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = ({children}) => {
  return (
    <div>
      {/* <AdminNavbar /> */}
      <Outlet />
    </div>
  )
}

export default Admin
