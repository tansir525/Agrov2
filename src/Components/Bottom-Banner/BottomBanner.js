import { Grid } from '@mui/material';
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import pattern from '../../Assets/resourse/grey_pattern.webp'
import pic from '../../Assets/pumpkin.jpg'
import pic2 from '../../Assets/c3 (2).jpg'
import pic3 from '../../Assets/Farmer_of_Bangladesh.jpg'

import { BsCheckLg } from "react-icons/bs";

import './BottomBanner.css'
import { IconContext } from 'react-icons';
import CustomHeading from '../styles/Heading.style';

const BottomBanner = () => {
    return (
        <div  className='custombottombannerbackground'>

        <Container>
            
        <img className='bdpattern' src={pattern} alt="" srcset="" />
            <div className='cusbottom'>
                <CustomHeading >OUR VALUES</CustomHeading>
                
                <p style={{color: '#0A3340'}} className='text-center'>AGROVERSE is committed to producing healthy, nutritious offerings that are not only enticing, accessible, exciting, and unique, but also sustainable and dedicated its energy to help to achieve potential.</p>
            </div>
            <Grid container spacing={2}>
            <Grid className='text-center d-flex justify-content-end align-items-center text-justify ' item lg={6}  md={6} sm={12} xs={12}>
                <div>
                
             
               
                <h5>

<IconContext.Provider
      value={{ color: '#008000', size: '15px', marginright: '15px' }}
    >
      <div className=' text-start'>
      
      
            <p> <BsCheckLg/>  Sustainable Agro Production</p>
             <p><BsCheckLg/>  Research and Innovation</p>
             <p><BsCheckLg/>  Safe and Healthy Offerings</p>
             <p><BsCheckLg/>  Economic Growth and Well Being</p>
             <p><BsCheckLg/>  Climate Positive</p>

             
           


      </div>
    </IconContext.Provider>

              
                </h5>
                </div>
                <div> </div>
            
            </Grid>
            <Grid item lg={6}  md={6} sm={12} xs={12}>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded cus-img-caro"
                src={pic}
                alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded cus-img-caro"
                src={pic2}
                alt="Second slide"
                />

            
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded cus-img-caro"
                src={pic3}
                alt="Third slide"
                />

             
            </Carousel.Item>
            </Carousel>
             
            </Grid>
          
            </Grid>

           {/* <div className=' d-flex justify-content-center  p-5'>
           <CustomButton> View More</CustomButton>
           </div> */}


         

        </Container>

        </div>
    );
};

export default BottomBanner;