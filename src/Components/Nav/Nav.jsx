import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
// import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'
import './nav.css'
import { Link } from 'react-scroll'
function Nav() {
  const [activeNav,setactiveNav]= useState('#')
   
  return (
    <nav>
      <Link to='header'  spy={true} smooth={true} offset={50} duration={500} onClick={()=>setactiveNav('headr')}className={activeNav=='header'?'active':''}><AiOutlineHome/></Link>
      <Link to="about"  spy={true} smooth={true} offset={50} duration={500}  onClick={()=>setactiveNav('#about')} className={activeNav=='#about'?'active':''}><AiOutlineUser/></Link>
      <Link to="Experience"  spy={true} smooth={true} offset={50} duration={500} onClick={()=>setactiveNav('#Experience')} className={activeNav=='#Experience'?'active':''}><BsBook/></Link>
      <Link to="Portfolio"  spy={true} smooth={true} offset={50} duration={500} onClick={()=>setactiveNav('#Portfolio')} className={activeNav=='#Portfolio'?'active':''}><FaLaptopCode/></Link>
      <Link to="contact"  spy={true} smooth={true} offset={50} duration={500} onClick={()=>setactiveNav('#contact')} className={activeNav=='#contact'?'active':''}><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Nav