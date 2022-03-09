import React from 'react';
import './Environment.css'
import devider from '../../Assets/Environment/enviroment-intro-1-illustration.png'
import { Container } from 'react-bootstrap';
import {  Grid } from '@mui/material';
import elogo1 from '../../Assets/Environment/PNG2/Artboard 6.png'
import elogo2 from '../../Assets/Environment/PNG2/Artboard 7.png'
import elogo3 from '../../Assets/Environment/PNG2/Artboard 8.png'
import elogo4 from '../../Assets/Environment/PNG2/Artboard 10.png'
import elogo5 from '../../Assets/Environment/PNG2/Artboard 11.png'
import elogo6 from '../../Assets/Environment/PNG2/Artboard 12.png'


const Environment = () => {
    return (
        <div className='environmentbg'>
            <Container>
            <img className='img-fluid' src={devider} alt="" srcset="" />
             <div className='text-center mb-2 pb-3'>
            <h2 style={{color: '#008000', fontWeight:'bold'}} className='mt-5'>We are driven by a vision for sustainability</h2>
            </div>
            <p className='text-center '>
“To resolve some of the major Global Challenges, and achieve the Sustainable Development Goals (SDGs), AGROVERSE is playing a crucial role through the transformation of its agro-business model into a sustainable development framework, holistic approach, innovation, and good practices.  ”</p>
            
            <Grid container Spacing={2}>
            <Grid item lg={4}  md={6} sm={12} xs={12}>
          
            <div class="container">
             <div class="card">
                    <div class="imgBx">
                    <img src={elogo1} alt="" srcset="" />
                    </div>
                    <div class="contentBx">
                    <h2>No Proverty</h2>
                    <div class="size">
                       <p>AGROVERSE is envisioned to contribute to eradicating Extreme Poverty and Reducing the number of people living in poverty.</p>
                    </div>
                    <a href="#">Explore More</a>
                    </div>
                </div>
            </div>
           
            </Grid>
            
            <Grid item lg={4}  md={6} sm={12} xs={12}>
            <div class="container">
             <div class="card">
                    <div class="imgBx">
                    <img src={elogo2} alt="" srcset="" />
                    </div>
                    <div class="contentBx">
                    <h2>Zero Hunger</h2>
                    <div class="size">
                       <p>AGROVERSE ensures minimum waste of food by eliminating the factors through food processing.</p>
                    </div>
                    <a href="#">Explore More</a>
                    </div>
                </div>
            </div>
            </Grid>
            <Grid item lg={4}  md={6} sm={12} xs={12}>
            <div class="container">
             <div class="card">
                    <div class="imgBx">
                    <img src={elogo6} alt="" srcset="" />
                    </div>
                    <div class="contentBx">
                    <h2>Good Helth & Well-being</h2>
                    <div class="size">
                       <p>AGROVERSE plans to encourage safe and healthy agriculture and food systems to reduce hazardous chemicals and pollution. </p>
                    </div>
                    <a href="#">Explore More</a>
                    </div>
                </div>
            </div>
            </Grid>
            <Grid item lg={4}  md={6} sm={12} xs={12}>
            <div class="container">
             <div class="card">
                    <div class="imgBx">
                    <img src={elogo3}alt="" srcset="" />
                    </div>
                    <div class="contentBx">
                    <h2>Decent Work & Economic groth</h2>
                    <div class="size">
                       <p>AGROVERSE supports policies and actions aimed at empowering and improving human resource capacity...</p>
                    </div>
                    <a href="#">Explore More</a>
                    </div>
                </div>
            </div>
            </Grid>
            <Grid item lg={4}  md={6} sm={12} xs={12}>
            <div class="container">
             <div class="card">
                    <div class="imgBx">
                    <img src={elogo4} alt="" srcset="" />
                    </div>
                    <div class="contentBx">
                    <h2>Responsible Consumption and Production</h2>
                    <div class="size">
                       <p>AGROVERSE  aspires to promote sustainable patterns of consumption and production...</p>
                    </div>
                    <a href="#">Explore More</a>
                    </div>
                </div>
            </div>
            </Grid>
            <Grid item lg={4}  md={6} sm={12} xs={12}>
            <div class="container">
             <div class="card">
                    <div class="imgBx">
                    <img src={elogo5} alt="" srcset="" />
                    </div>
                    <div class="contentBx">
                    <h2>Climate Action</h2>
                    <div class="size">
                       <p>AGROVERSE aims to reduce carbon emissions to net-zero by integrating traditional and scientific knowledge with best practices.</p>
                    </div>
                    <a href="#">Explore More</a>
                    </div>
                </div>
            </div>
            </Grid>
         
            </Grid>
                        
                        
            
            
            
            </Container>   
        </div>
    );
};

export default Environment;