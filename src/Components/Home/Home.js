import React from 'react';
import Banner from '../Banner/Banner';
import BannerDevider from '../BannerDevider/BannerDevider';
import BottomBanner from '../Bottom-Banner/BottomBanner';

import Environment from '../Environment/Environment';


import FormPage from '../FormPage/FormPage';
import Navbar from '../Navbar';


import Sdgbottom from '../SDG-Bottom/Sdgbottom';


import SubBanner from '../SubBanner/SubBanner';
import ZeroCarbon from '../ZeroCarbon/ZeroCarbon';

const Home = () => {
    return (
        <>
           
           <Navbar/>        
           {/* <CarousalBanner/> */}
           <Banner/>
           <BannerDevider/>
           <SubBanner/>
          
         
           <BottomBanner/>
           <ZeroCarbon/>
           <Sdgbottom/>
           <Environment/>
           <FormPage/>
           

        
          
        </>
    );
};

export default Home;