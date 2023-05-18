import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
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
      <Link to="services"  spy={true} smooth={true} offset={50} duration={500} onClick={()=>setactiveNav('#services')} className={activeNav=='#services'?'active':''}><RiServiceLine/></Link>
      <Link to="contact"  spy={true} smooth={true} offset={50} duration={500} onClick={()=>setactiveNav('#contact')} className={activeNav=='#contact'?'active':''}><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Nav