import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
        <Sidebar/>
        <Header/>
        <main className="nxl-container">
            <div className="nxl-content">
                <div className="page-header">
                    <div className="page-header-left d-flex align-items-center">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Dashboard</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Analytics</li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <Outlet/>
                </div>

            </div>
            
        </main>
    </>
  )
}

export default AdminLayout