import React from 'react'
import './Signin.css'
import logosignin from "../Images/2944960.jpg";
import usimg from '../Images/us.svg'
import signleet from '../Images/logosign.svg'
import verifyin from '../Images/CLOUDFARE.gif'
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  const navigate=useNavigate('')
  function handleChange(){
    navigate("/")
  }
  return (
    <div className="signin-main">
      <div className="signflex-in flex">
      <div className="navbar-left-log-cnt-in">
     <img src={logosignin} alt="logosign" className="logopng4" style={{height:'22px'}} />
     <div className="nav-sign-menu-in">
     <a href="App.js">
            <span className="sig1-in">Explore</span>
          </a>
          <a href="App.js">
            <span className="sig1-in">Problems</span>
          </a>
          <a href="App.js">
            <span className="sig1-in">Contest</span>
          </a>
          <a href="App.js">
            <span className="sig1-in">Discuss</span>
          </a>
          <a href="App.js">
            <span className="sig1-in">Interview<MdOutlineKeyboardArrowDown /></span>
          </a>
          <a href="App.js">
            <span className="sig2-in">Store<MdOutlineKeyboardArrowDown /></span>
          </a>
     </div>
         
     </div>
     <div className="nav-right-sign-cnt-in">
     <a href="App.js">
            <span className="Premium1-in">Premium</span>
          </a>
     </div>
      </div>
      <p className="signpara-in" style={{color:'white',backgroundColor:'#FFB700'}}>We will be undergoing a planned 10-minute maintenance starting at 10 PM UTC on July 28th 2024. We apologize in advance for any inconvenience.</p>
      <div className="signinbox-in">
        <div className="signinboxborder-in">
          <img src={signleet} alt="" className="leetcodesign-in" />
          <form>
            <span className="username">
              <input type="text" className="classuser-in" spellCheck='false' autoCorrect="off" autoCapitalize="off" placeholder="Username or E-mail" name="username"/>
            </span>
            <span className="password2">
              <input type="password" className="passwordsign-in" spellCheck='false' autoCorrect="off" autoCapitalize="off" placeholder="Password" name=" Password" />
            </span>
            <img src={verifyin} alt="" className="cloud-in" />
            <button className="signupbtn-in"  onClick={handleChange}>Sign Up</button>
          
          </form>
          <p className="signuppara-in" style={{color:'grey',cursor:'pointer'}}>Forget Password&#63;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="App.js" style={{textDecoration:'none',color:'grey'}}>Sign Up</a></p>
          <p className="p2-in" style={{opacity:'0.5'}}>are you can sign in with</p>
          
 
<AiFillGoogleCircle className="goolicon-in" style={{opacity:'0.5'}}/>&nbsp;  <FaGithub className="githu-in" style={{opacity:'0.5'}} />  &nbsp; <FaFacebook className="fb-in" style={{opacity:'0.5'}} /> &nbsp;  <CiCircleMore style={{opacity:'0.5'}} />

        </div>
      </div>
     <div className="footersign-in">
     <div className="footer-left-sign-in ">
         <p className="footparasign-in" style={{fontSize:'15px'}}>Copyright &copy; 2024 LeetCode</p>
         <div className="linkssign-in" style={{fontSize:'15px'}}>
         <a href="App.js">Help Center</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Jobs</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Bug Bounty</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Students</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Terms</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Privacy Policy</a>
         </div>
       
     </div>
    <div className="footer-right-sign-in">
       
         <span>&nbsp;&nbsp;</span>
        <a href="App.js" className='usimg-in'><img src={usimg} style={{height:'15px'}} alt="usimg" className='usimages-in' />UnitedStates</a>
        
        
        
      
    </div>
     </div>
    </div>
  )
}