
import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => {
  const [activateAnimation, setActivateAnimation] = useState(0);
  // Animations
  const animation = document.querySelector('div.animation');
  const animation2 = document.querySelector('div.animation2');
  const animation3 = document.querySelector('div.animation3');

  // Text components
  const texto1 = document.querySelector('div.texto1');
  const texto2 = document.querySelector('div.texto2');
  const texto3 = document.querySelector('div.texto3');

  // Text arrays
  const nombres1 = ['Cañonero', 'Cañonero 2', 'Cañonero 3', 'Cañonero 4', 'Cañonero 5'];
  const nombres2 = ['Suegra', 'Suegra 2', 'Suegra 3', 'Suegra 4', 'Suegra 5'];
  const nombres3 = ['Business', 'Business 2', 'Business 3', 'Business 4', 'Business 5'];

  // Counting iterations per div
  let iterationCount1 = 0;
  let iterationCount2 = 0;
  let iterationCount3 = 0;

  if (animation) {
    // Animation iterations
    animation.addEventListener('animationiteration', () => {
      iterationCount1++;
      texto1.textContent = nombres1[iterationCount1];
    });

    // End animations
    animation.addEventListener('animationend', () => {
      texto1.textContent = nombres1[0];
    });
  }

  if (animation2) {
    // Animation iterations
    animation2.addEventListener('animationiteration', () => {
      iterationCount2++;
      texto2.textContent = nombres2[iterationCount2];
    });

    // End animations
    animation2.addEventListener('animationend', () => {
      texto2.textContent = nombres2[0];
    });
  }

  if (animation3) {
    // Animation iterations
    animation3.addEventListener('animationiteration', () => {
      iterationCount3++;
      texto3.textContent = nombres3[iterationCount3];
    });

    // End animations
    animation3.addEventListener('animationend', () => {
      texto3.textContent = nombres3[0];
    });
  }

  // activarAnimacion
  const activarAnimacion = () =>{
    // Toggle of active class, if None then active else None
    if (animation) {
      animation.classList.toggle('active');
    }

    if (animation2) {
      animation2.classList.toggle('active');
    }

    if (animation3) {
      animation3.classList.toggle('active');
    }

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
            <div className='animation'>
              <div className='numero1 m-l-10-percent text-caballos-numero'>0</div>
              <div className='texto1 text-caballos-nombre'>Cañonero</div>
            </div>
          </div>
          <div className='caballo2 m-b-20'>
            <div className='animation2'>
              <div className='m-l-10-percent text-caballos-numero'>1</div>
              <div className='texto2 text-caballos-nombre'>Cañonero</div>
            </div>
          </div>
          <div className='caballo3 m-b-20'>
            <div className='animation3'>
              <div className='m-l-10-percent text-caballos-numero'>2</div>
              <div className='texto3 text-caballos-nombre'>Cañonero</div>
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
