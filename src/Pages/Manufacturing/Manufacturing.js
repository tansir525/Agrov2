import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Manufacturing.css'
import manudev from "../../Assets/resourse/grey_pattern.webp";
import manuicon from '../../Assets/Environment/icon.png'
import manuimg from '../../Assets/Manufacturing/m1.jpg'

const Manufacturing = () => {
    return (
      <div>
        <div className="manufacturingbanner">
          <h1 className="centermanufacturing">
            We believe in Green <br /> Manufacturing to conserve energy <br />{" "}
            and prevent pollution. <br />{" "}
          </h1>
        </div>
        <Container>
          <div className="manubanner">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="manufacturingtext">
                  <h2>FOOD PROCESSING AND MANUFACTURING</h2>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="manufacturingtext">
                  <p>
                    AGROVERSE began its agro-food processing and manufacturing
                    industry with a mission to promote the sustainable
                    production of safe, nutritious, diverse, and culturally
                    acceptable agro-food products all over the globe. AGROVERSE
                    is manufacturing a wide range of F&B products maintaining
                    high moral standards in its daily operations to provide high
                    efficient and quality services to the respected partners.
                    <br /> <br />
                    AGROVERSE works closely with farmers, sources raw materials
                    directly from them, and authentic suppliers and processes
                    and manufactures agro-food products to fulfill customers'
                    demands.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <img src={manudev} alt="" srcset="" />
        <div className="manudetails ">
          <Container>
            <div className="manusubbanner ">
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className="manuimg">
                    <img src={manuimg} alt="" srcset="" />
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className="manuitemdetails">
                    <div className="manucontent">
                      <h3>
                        we committed to guaranteeing the highest quality &
                        meeting customer satisfaction standards.
                      </h3>
                      <p>
                        The wide range of agro-products offered is designed to
                        be easily consumed in order for everyone to be able to
                        lead a healthy lifestyle. AGROVERSE ensures minimum
                        waste of food by eliminating the factors through food
                        processing and aspires to promote sustainable patterns
                        of consumption and production and reduce production and
                        post-harvest waste and losses during agro-food
                        processing and manufacturing.
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="pt-5">
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam ab optio laudantium! Recusandae, iste adipisci?
                  </p>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <div className="manuicon">
                    <img src={manuicon} alt="" srcset="" />
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam ab optio laudantium! Recusandae, iste adipisci?
                  </p>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam ab optio laudantium! Recusandae, iste adipisci?
                  </p>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Manufacturing;