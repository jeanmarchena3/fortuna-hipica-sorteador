
import React from 'react';
import './App.css';

const App = () => (
  <div className='App'>
    <div className='main-container-info'>
      <div className='container-info-reunion'>
        <div className='container-data-reunion reunion'>
          SORTEO N 002
        </div>
        <div className='container-data-reunion m-l-10 dia-triple'>
          MARTES
        </div>
        <div className='container-data-reunion m-l-10 fecha-triple'>
          06/10/2023
        </div>
        <div className='container-data-reunion m-l-10 hora-triple'>
          1:00 PM
        </div>
      </div>
    </div>
    <div className='main-container-caballos'>
      <div className='container-info-caballos'>
        <div className='caballo1 m-b-20' id='output'>
          <div className='m-l-10-percent text-caballos-numero'>0</div>
          <div className='m-r-10-percent text-caballos-nombre'>Cañonero</div>
        </div>
        <div className='caballo2 m-b-20'>
          <div className='m-l-10-percent text-caballos-numero'>0</div>
          <div className='m-r-10-percent text-caballos-nombre'>Cañonero</div>
        </div>
        <div className='caballo3'>
          <div className='m-l-10-percent text-caballos-numero'>0</div>
          <div className='m-r-10-percent text-caballos-nombre'>Cañonero</div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='wrapper'>
        <div className='sub-wrapper'>
          <span className='word'>Huracan si</span>
        </div>
      </div>
    </div>
    <div id='output'>--</div>
  </div>
);

export default App;
