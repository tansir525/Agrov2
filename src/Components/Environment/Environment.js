import React from 'react';
import './Environment.css'
import devider from '../../Assets/Environment/enviroment-intro-1-illustration.png'
import { Container } from 'react-bootstrap';
import {  Button, Grid } from '@mui/material';
import flip1 from '../../Assets/Environment/1.jpg'
import flip2 from '../../Assets/Environment/2.jpeg'
import flip3 from '../../Assets/Environment/3.jpg'
import flip4 from '../../Assets/Environment/4.png'
import flip5 from '../../Assets/Environment/5.png'
import flip6 from '../../Assets/Environment/6.jpg'
import { Link } from 'react-router-dom';
import SdgButton from '../styles/SdgButton.style';



const Environment = () => {
    return (
      <>
        <Container className=" envcontainer mx-auto">
          <div>
            <img className="img-fluid" src={devider} alt="" srcset="" />
            <div className="text-center mb-2 pb-3">
              <h2
                style={{ color: "#008000", fontWeight: "bold" }}
                className="mt-5"
              >
                We are driven by a vision for sustainability
              </h2>

              <p className=" mb-5">
                <br />
                “To resolve some of the major Global Challenges, and achieve the
                Sustainable Development Goals (SDGs), AGROVERSE is playing a
                crucial role through the transformation of its agro-business
                model into a sustainable development framework, holistic
                approach, innovation, and good practices. ”
              </p>
            </div>

            <div className="grid-container">
              <Grid className='envgrid' container spacing={3}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img className="flipimg img-fluid" src={flip1} alt="" />
                        <h5 className="f1">No Poverty</h5>
                      </div>
                      <div class="flip-card-back colo1">
                        <p>
                          AGROVERSE is envisioned to contribute to eradicating
                          Extreme Poverty and Reducing the number of people
                          living in poverty.
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img className="flipimg img-fluid" src={flip2} alt="" />
                        <h5 className="f2">Zero Hunger</h5>
                      </div>
                      <div class="flip-card-back colo2">
                        <p>
                          AGROVERSE ensures minimum waste of food by eliminating
                          the factors through food processing.
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img className="flipimg img-fluid" src={flip3} alt="" />
                        <h5 className="f3">Good Health & Well-being</h5>
                      </div>
                      <div class="flip-card-back colo3">
                        <p>
                          AGROVERSE plans to encourage safe and healthy
                          agriculture and food systems to reduce hazardous
                          chemicals and pollution.
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img className="flipimg img-fluid" src={flip4} alt="" />
                        <h5 className="f4">Decent Work & Economic growth</h5>
                      </div>
                      <div class="flip-card-back colo4">
                        <p>
                          AGROVERSE supports policies and actions aimed at
                          empowering and improving human resource capacity..
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img className="flipimg img-fluid" src={flip5} alt="" />
                        <h5 className="f5">
                          Responsible Consumption and Production
                        </h5>
                      </div>
                      <div class="flip-card-back colo5">
                        <p>
                          AGROVERSE aspires to promote sustainable patterns of
                          consumption and production...
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img className="flipimg img-fluid" src={flip6} alt="" />
                        <h5 className="f6">Climate Action</h5>
                      </div>
                      <div class="flip-card-back colo6">
                        <p>
                          AGROVERSE aims to reduce carbon emissions to net-zero
                          by integrating traditional and scientific knowledge
                          with best practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="env-button p-5">
            <Link to="/sdg">
              {" "}
              
              <SdgButton className="text-left">Discover More</SdgButton>
            </Link>
          </div>
        </Container>
      </>
    );
};

export default Environment;