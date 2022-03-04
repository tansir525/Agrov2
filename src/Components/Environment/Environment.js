import React from 'react';
import './Environment.css'
import devider from '../../Assets/Environment/enviroment-intro-1-illustration.png'
import { Container } from 'react-bootstrap';
import {  Grid } from '@mui/material';
import elogo1 from '../../Assets/Environment/PNG1/Artboard 6.png'
import elogo2 from '../../Assets/Environment/PNG1/Artboard 7.png'
import elogo3 from '../../Assets/Environment/PNG1/Artboard 8.png'
import elogo4 from '../../Assets/Environment/PNG1/Artboard 9.png'
import elogo5 from '../../Assets/Environment/PNG1/Artboard 10.png'
import elogo6 from '../../Assets/Environment/PNG1/Artboard 11.png'


const Environment = () => {
    return (
        <div className='environmentbg'>
            <Container>
            <img className='img-fluid' src={devider} alt="" srcset="" />
             <div className='text-center mb-2 pb-3'>
            <h2 style={{color: '#008000', fontWeight:'bold'}} className='mt-5'>We are driven by a vision for sustainability</h2>
            </div>
            <p className='text-center '>
“Our Sustainability and National Contribution Report 2020 tells the story of how we as a Group serve to fulfil our responsibilities to contribute more Environmental, Social and Governance (ESG) value, in a historic year that saw the world as we know it irrevocably changed.”</p>
            
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
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quaerat.</p>
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
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quaerat.</p>
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
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quaerat.</p>
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
                    <h2>Industry,Inovation & Infrastructure</h2>
                    <div class="size">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quaerat.</p>
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
                    <h2>Responssible Production</h2>
                    <div class="size">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quaerat.</p>
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
                    <h2>Climate Action</h2>
                    <div class="size">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quaerat.</p>
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