import React from 'react';
import './BannerDevider.css'

import { Button, Grid } from '@mui/material';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BannerDevider = () => {
    return (
      <div className="devider-banner">
        <Container className="devider-content">
          <Grid container spacing={0}>
            <Grid className="abouttitle" item lg={6} md={6} sm={12} xs={12}>
              <h3 className="bdh">
                Redefining the Future of <br />
                <span className=" bds">Agro-Food Production</span>
              </h3>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <p className="bdp">
                We are working closely with farmers, sourcing raw materials
                directly from them and authentic suppliers, processing and
                manufacturing agro-products maintaining high moral standards to
                ensure the utmost quality of the produce; and delivering the
                products to customers to satisfy their needs.
              </p>
              {/* <CustomButton>Explore us</CustomButton> */}
              <div className="text-left bannerdeviderbutton">
                <Link to="/about" className="text-decoration-none text-left">
                  {" "}
                  <Button variant="contained" color="success">
                    Discover More
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default BannerDevider;