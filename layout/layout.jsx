import React from 'react'
import Header from './Header'
import Footer from './Footer'
import DashboardLayout from './dashboardLayout'
import { useData } from "@/context/DataContext"

const Layout = ({children}) => {
  const { isLoggedIn, isOnHomepage } = useData()
  return (
    <>
        { 
          isLoggedIn == true && isOnHomepage == false ? <DashboardLayout /> : null 
        }
        {
          isOnHomepage == true ? <Header /> : null
        }
        {children}
        {
          isOnHomepage == true ? <Footer /> : null
        }
    </>
  )
}

export default Layout
