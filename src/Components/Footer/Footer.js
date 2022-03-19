import {  Grid } from '@mui/material';
import React from 'react';
import logo from '../../Assets/Footer/flogo.png'
import './Footer.css'
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <div className='footerBackgeound footer'>
            

<Grid className='p-5' container spacing={2}>
  <Grid item xs={6} md={8}>

  <Grid container spacing={2}>
  <Grid item xs={6} md={4}>
  <img 
        src={logo}
        width="70%"
        height="60%"
        className="d-inline-block align-top img-fluid"
        alt="React Bootstrap logo"
 />

 
    
  </Grid>
  <Grid item xs={6} md={4}>
  <p className='text-white parafooter'>We always strives to contribute to achieving the Sustainable Development Goals through our business model.</p>
  </Grid>
  <Grid item xs={6} md={4}>
  <p className='cusfooter '>
  

            <ul> <a href="/home">INDUSTRIES</a> </ul>
            <ul> <a href="/values">VALUES</a> </ul>
            <ul> <a href="/environment">ENVIRONMENT</a></ul>
            <ul> <a href="/career">CAREER</a> </ul>
    </p>
  </Grid>
 
</Grid>


    
  </Grid>
  <Grid item xs={6} md={4} >
  <h5 className='text-white text-center'>Follow us</h5>
  <br />
 

  <IconContext.Provider
 value={{ color: 'white', size: '30px' }}
      
    >
        <div className='d-flex justify-content-center'>
        <span className='me-3'><BsFacebook/> </span> <span className='me-3'><BsInstagram/></span><span className='me-3'><BsYoutube/></span>
        </div>
   


  </IconContext.Provider>

  </Grid>
 
</Grid>

<div>
<p class="text-muted text-center mb-0">©2022. Developed by Agroverse Limited.</p>
</div>
       
        </div>
    );
};

export default Footer;