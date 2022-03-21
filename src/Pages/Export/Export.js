import { Grid } from '@mui/material';
import React from 'react';
import './Export.css'
import { Container } from "react-bootstrap";
import { Carousel} from "react-bootstrap";
import e1 from '../../Assets/Export/e1.jpg'
import e2 from '../../Assets/Export/e2.jpg'
import e3 from '../../Assets/Export/e3.jpg'
import expotdev from '../../Assets/resourse/grey_pattern.webp'
const Export = () => {
    return (
      <div>
        <div>
          <div className="exportbanner">
            {/* <h1 className="centerexport"></h1> */}
          </div>
        </div>
        <Container className="customAbout">
          <Grid className="customabout" container spacing={0}>
            <Grid item xs={6}>
              <div className="abouttitle">
                <h1>Exports</h1>
              </div>
            </Grid>
            <Grid item xs={6}>
              <p>
                Founded in 2021, AgroVerse is a universal agricultural food
                products processing and manufacturing company located in
                Bangladesh. <br /> <br />
                AgroVerse is working closely with farmers; sourcing raw
                materials directly from them and authentic suppliers; processing
                and manufacturing agro-products maintaining high moral standards
              </p>
            </Grid>
          </Grid>
        </Container>
<img src={expotdev} alt="" srcset="" />
        <div className="exportpolicy">
          <Container>
            <Grid className="mt-5 pt-5 mb-1 pb-1" container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="custom-export ">
                  <h3 style={{ color: "#008000", fontWeight: "bold" }}>
                    Our Export Policy
                  </h3>
                  <p>
                    {" "}
                    By working with farmers, we make sure farming is
                    scientifically made more efficient. And then we bring those
                    products to the market.{" "}
                  </p>
                  <h5>
                    We’re implementing data-driven farming and
                    <br />
                    procurement across some of the most needed
                    <br />
                    verticals –
                  </h5>

                  <ul>
                    <li>Dairy milk</li>
                    <li>Fattening cattle</li>
                    <li> Wheat</li>
                  </ul>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Carousel fade className="export-imgcaro">
                  <Carousel.Item>
                    <img
                      className=" imgcaro d-block "
                      src={e1}
                      alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block " src={e2} alt="Second slide" />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block " src={e3} alt="Third slide" />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
};

export default Export;