import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Marketing.css'
import marketingcard from '../../Assets/Marketing/marketing.webp'
import expotdev from "../../Assets/resourse/grey_pattern.webp";
import g1 from '../../Assets/Marketing/g1.jpg'
import g2 from '../../Assets/Marketing/g2.jpg'
const Marketing = () => {
    return (
      <>
        <div className="marketingbanner">
          {/* <h1 className="centermarketing">
            “A good farmer is  nothing <br /> more nor less than a handy <br />{" "}
            man with a sense of humus.”
          </h1> */}
        </div>
        <Container>
          <div className="marketing2banner">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="marketingtext text-center">
                  <h2>MARKETING</h2>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="marketingtext">
                  <p>
                    AGROVERSE set up its marketing sector with an aim to create
                    awareness, promote and market the business locally in
                    Bangladesh as well as in different parts of the globe. The
                    objective is to promote AGROVERSE and its mission to reach
                    more people and create awareness in order to grow and
                    expand.
                    <br /> <br />
                    The dedicated marketing sector involves in different
                    marketing activities including market research to identify
                    the issues and challenges faced by the agro-sector and find
                    out the solutions to overcome them. The team helps in the
                    product development process by providing relevant
                    information and contributing to product innovation and
                    creating new market opportunities.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <img src={expotdev} alt="" srcset="" />
        <div className="marketingpolicy">
          <Container>
            <div className="mt-5 pt-5">
              <div className="marketingtext2">
                <h3>We work together</h3>
                <p>
                  Our marketing sector is committed to maintaining good
                  relationships with the customers, vendors, and other
                  stakeholders and listening to their issues and opinions to
                  improve the quality of services and establish AGROVERSE a
                  leading agro-business company as a whole. Apart from this, the
                  marketing sector is helping AGROVERSE to accomplish its vision
                  to contribute to achieving Sustainable Development Goals
                  (SDGs) through different campaigns, activities, and training
                  programs.{" "}
                </p>
              </div>
              <div className="tittle">
                <h4> We believe in Green Marketing</h4>
                <p className="text-center">
                  Green marketing is the marketing of products that are presumed
                  to be environmentally safe. It incorporates a broad range of
                  activities, including product modification, changes to the
                  production process, sustainable packaging, as well as
                  modifying advertising.
                </p>
              </div>
              <Grid container spacing={0}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="cards">
                    <div class="card">
                      {/* <h2 class="card-title">hgfd</h2> */}
                      <img src={g1} alt="" srcset="" />
                      <p class="card-desc">
                        Pinnipeds, commonly known as seals,[a] are a widely
                        distributed and diverse clade of carnivorous,
                        fin-footed, semiaquatic marine mammals. They comprise
                        the extant families Odobenidae (whose only living member
                        is the walrus), Otariidae (the eared seals: sea lions
                        and fur seals), and Phocidae (the earless seals, or true
                        seals).
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="cards">
                    <div class="card">
                      {/* <h2 class="card-title">General trading</h2> */}
                      <img src={g2} alt="" srcset="" />
                      <p class="card-desc">
                        Pinnipeds, commonly known as seals,[a] are a widely
                        distributed and diverse clade of carnivorous,
                        fin-footed, semiaquatic marine mammals. They comprise
                        the extant families Odobenidae (whose only living member
                        is the walrus), Otariidae (the eared seals: sea lions
                        and fur seals), and Phocidae (the earless seals, or true
                        seals).
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div class="cards">
                    <div class="card">
                      {/* <h2 class="card-title">Advertising</h2> */}
                      <img src={marketingcard} alt="" srcset="" />
                      <p class="card-desc">
                        Pinnipeds, commonly known as seals,[a] are a widely
                        distributed and diverse clade of carnivorous,
                        fin-footed, semiaquatic marine mammals. They comprise
                        the extant families Odobenidae (whose only living member
                        is the walrus), Otariidae (the eared seals: sea lions
                        and fur seals), and Phocidae (the earless seals, or true
                        seals).
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </>
    );
};

export default Marketing;