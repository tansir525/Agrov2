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
                <h1>EXPORTS</h1>
              </div>
            </Grid>
            <Grid item xs={6}>
              <p>
                AGROVERSE started its exports sector with the commitment to
                deliver safe, healthy, nutritious, high quality, environmentally
                friendly, and ethically produced agro-food products maintaining
                the flexibility to adapt to the ever-changing needs of the
                customers. <br /> <br /> Currently, AGROVERSE is manufacturing a
                wide variety of agro-food products and exporting them to
                different parts of the globe including the Middle East,
                South-East Asia, North America, and Europe sustaining high moral
                standards in its daily operations to provide high efficient and
                quality services to the respected partners.
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
                    AGROVERSE strictly follows International Standards on
                    Quality Management System to ensure consistent quality of
                    products and services to achieve customer satisfaction.
                    AGROVERSE has a dedicated R&D team who always strives to
                    improve the manufacturing process and all the offered range
                    is gone through different parameters and checked by Quality
                    Control Unit to ensure high-quality standards, fast
                    delivery, and overall a great customer experience.
                  </p>

                  <ul>
                    <li>
                      AGROVERSE enforces strict Halal and European (EU)
                      Standards in its operations{" "}
                    </li>
                    <li>
                      Quality and Safety of the products meet required standards
                      in order to be sold to European as well as international
                      markets.{" "}
                    </li>
                    <li>
                      AGROVERSE is proud to successfully and consistently meet
                      the quality standards set for its products.
                    </li>
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