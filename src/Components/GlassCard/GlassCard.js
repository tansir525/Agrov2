import React from 'react';
import './GlassCard.css'


const GlassCard = () => {
    return (
        <div className='exportcontainer'>
            <div className="container">
      <div className="card">
        <div className="contentbef"></div>
        <div className="content">
        <h1 className='custom-h1' > <span style={{color: '#008000', letterSpacing: '5px'}}>AGRO</span><span style={{color: 'white'}}>VERSE</span></h1>
          <h5 className='bh'>Redefining the Future of Agro-Food Production</h5>
          <br />
          <p className=' bp'>
          We are working closely with farmers, sourcing raw materials directly from them and authentic suppliers, processing and manufacturing agro-products maintaining high moral standards to ensure the utmost quality of the produce; and delivering the products to customers to satisfy their needs.
          </p>
         
        </div>
      </div>
    </div>
        </div>
    );
};

export default GlassCard;