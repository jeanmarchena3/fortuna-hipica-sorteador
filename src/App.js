
import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => {
  const [activateAnimation, setActivateAnimation] = useState(0);
  const activarAnimacion = () =>{
    console.log('activar animacion', activateAnimation);
    setActivateAnimation((activateAnimation + 1) % 2);
  };
  return (
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
          <div className='caballo1 m-b-20'>
            <div className={activateAnimation ? 'activeAnimation' : 'inactiveAnimation'}>
              <div className='m-l-10-percent text-caballos-numero'>0</div>
              <div className='text-caballos-nombre'>Cañonero</div>
            </div>
          </div>
          <div className='caballo2 m-b-20'>
            <div className={activateAnimation ? 'activeAnimation' : 'inactiveAnimation'}>
              <div className='m-l-10-percent text-caballos-numero'>0</div>
              <div className='text-caballos-nombre'>Cañonero</div>
            </div>
          </div>
          <div className='caballo3'>
            <div className={activateAnimation ? 'activeAnimation' : 'inactiveAnimation'}>
              <div className='m-l-10-percent text-caballos-numero'>0</div>
              <div className='text-caballos-nombre'>Cañonero</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button onClick={activarAnimacion}>Activar animacion</Button>
      </div>
    </div>
  );
};

export default App;
