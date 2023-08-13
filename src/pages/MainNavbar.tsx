import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Navbar from '../web/Navbar'

function MainNavbar() {
    const [dekstop, setDekstop] = useState(false)
    useEffect(() => {
        if(window.screen.width >= 500){
            setDekstop(true)
        }
        else{
            setDekstop(false)
        }

    })
  return (
    <>
    {
        dekstop ? <Navbar></Navbar> : <Menu></Menu>
    }
    </>
  )
}

export default MainNavbar