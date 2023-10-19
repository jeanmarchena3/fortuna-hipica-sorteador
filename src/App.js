
import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import dayjs from 'dayjs';
import './App.css';

import { initialData, getSorteos, insertarResultadosTriples } from './api';
import { getDayName } from './utils';

const App = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const paramConcurso = searchParams.get('concurso');

  const [activateAnimation, setActivateAnimation] = useState(false);
  const [caballos, setCaballos] = useState([]);
  const [casilla1, setCassilla1] = useState([]);
  const [casilla2, setCassilla2] = useState([]);
  const [casilla3, setCassilla3] = useState([]);

  const [sorteo, setSorteo] = useState({});
  const [concurso, setConcurso] = useState({});
  const [dateTriple, setDateTriple] = useState('');

  //const randInit = Math.floor(Math.random() * 10);
  const [randCasilla1, setRandCasilla1] = useState(Math.floor(Math.random() * 10));
  const [valueCasilla1, setValueCasilla1] = useState({});
  const [endCasilla1, setEndCasilla1] = useState(false);

  const [randCasilla2, setRandCasilla2] = useState(Math.floor(Math.random() * 10));
  const [valueCasilla2, setValueCasilla2] = useState({});
  const [endCasilla2, setEndCasilla2] = useState(false);

  const [randCasilla3, setRandCasilla3] = useState(Math.floor(Math.random() * 10));
  const [valueCasilla3, setValueCasilla3] = useState({});
  const [endCasilla3, setEndCasilla3] = useState(false);

  // Text components
  const texto1 = document.querySelector('div.texto1');
  const texto2 = document.querySelector('div.texto2');
  const texto3 = document.querySelector('div.texto3');

  // Number components
  const numero1 = document.querySelector('div.numero1');
  const numero2 = document.querySelector('div.numero2');
  const numero3 = document.querySelector('div.numero3');

  const getInitialData = async () => {
    try {
      const { data: response } = await initialData();
      const { data } = response;
      const { caballos = [] } = data;
      let { concursos = [] } = data;

      setCassilla1(caballos.filter(x => x.casilla === 1));
      setCassilla2(caballos.filter(x => x.casilla === 2));
      setCassilla3(caballos.filter(x => x.casilla === 3));
      setCaballos(caballos);

      concursos = concursos.filter(x=> x.id === parseInt(paramConcurso, 10));
      concursos.length > 0 && setConcurso(concursos[0]);

    } catch (error) {
      message.error('Ha ocurrido un error, intente nuevamente');
      console.log(error);
    }
  };

  const getDataSorteos = async () =>{
    try {
      const { data = [] } = await getSorteos({ status: 'active' });

      data.length > 0 && setSorteo(data[0]);

    } catch (error) {
      message.error('Ha ocurrido un error, intente nuevamente');
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialData();
    getDataSorteos();
  }, []);

  useEffect(() => {
    if (Object.keys(sorteo).length > 0 && Object.keys(concurso).length > 0) {
      const { fecha } = sorteo;
      const { numero_dia } = concurso;
      const auxDate = dayjs(fecha).day(numero_dia).add(-7, 'day').format('DD/MM/YYYY');
      setDateTriple(auxDate);
    }
  }, [sorteo, concurso]);

  const callInsertarResultadosTriples = async data =>{
    console.log('data a enviar: ', data);
    try {
      await insertarResultadosTriples(data);
      message.success('Resultados de triple registrados exitosamente');
    } catch (error) {
      message.error('Ha ocurrido un error, intente nuevamente');
      console.log(error);
    }
  };

  //verificacion general
  useEffect(() => {
    if (endCasilla1 && endCasilla2 && endCasilla3) {
      const auxValueCasilla1 = caballos.filter(x=>
        x.nombre === texto1.textContent &&
            x.nro_caballo === parseInt(numero1.textContent, 10) &&
            x.casilla === 1
      );

      const auxValueCasilla2 = caballos.filter(x=>
        x.nombre === texto2.textContent &&
            x.nro_caballo === parseInt(numero2.textContent, 10) &&
            x.casilla === 2
      );

      const auxValueCasilla3 = caballos.filter(x=>
        x.nombre === texto3.textContent &&
            x.nro_caballo === parseInt(numero3.textContent, 10) &&
            x.casilla === 3
      );

      setValueCasilla1(auxValueCasilla1);
      setValueCasilla2(auxValueCasilla2);
      setValueCasilla3(auxValueCasilla3);

      const { nro_caballo: nro_caballo1 } = auxValueCasilla1[0];
      const { nro_caballo: nro_caballo2 } = auxValueCasilla2[0];
      const { nro_caballo: nro_caballo3 } = auxValueCasilla3[0];
      const resultado = ''.concat(nro_caballo1, nro_caballo2, nro_caballo3);

      const { id: sorteo_id } = sorteo;
      const data = {
        sorteo_id,
        concurso_id: parseInt(paramConcurso, 10),
        resultado: parseInt(resultado, 10)
      };

      callInsertarResultadosTriples(data);
    }
  }, [endCasilla1, endCasilla2, endCasilla3]);

  // Animations
  const animation = document.querySelector('div.animation');
  const animation2 = document.querySelector('div.animation2');
  const animation3 = document.querySelector('div.animation3');

  if (animation && texto1) {
    animation.addEventListener('animationiteration', () => {
      texto1.textContent = casilla1[randCasilla1].nombre;
      numero1.textContent = casilla1[randCasilla1].nro_caballo;
      setRandCasilla1(Math.floor(Math.random() * 10));
    });

    animation.addEventListener('animationend', () => {
      texto1.textContent = casilla1[randCasilla1].nombre;
      numero1.textContent = casilla1[randCasilla1].nro_caballo;
      setEndCasilla1(true);
    });
  }

  if (animation2 && texto2) {
    animation2.addEventListener('animationiteration', () => {
      texto2.textContent = casilla2[randCasilla2].nombre;
      numero2.textContent = casilla2[randCasilla2].nro_caballo;
      setRandCasilla2(Math.floor(Math.random() * 10));
    });

    animation2.addEventListener('animationend', () => {
      texto2.textContent = casilla2[randCasilla2].nombre;
      numero2.textContent = casilla2[randCasilla2].nro_caballo;
      setEndCasilla2(true);
    });
  }

  if (animation3 && texto3) {
    animation3.addEventListener('animationiteration', () => {
      texto3.textContent = casilla3[randCasilla3].nombre;
      numero3.textContent = casilla3[randCasilla3].nro_caballo;
      setRandCasilla3(Math.floor(Math.random() * 10));
    });

    // End animations
    animation3.addEventListener('animationend', () => {
      texto3.textContent = casilla3[randCasilla3].nombre;
      numero3.textContent = casilla3[randCasilla3].nro_caballo;
      setEndCasilla3(true);
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

    setActivateAnimation(true);
  };

  return (
    <div className='App'>
      {caballos.length > 0 &&
      <>
        <div className='main-container-info'>
          <div className='container-info-reunion'>
            <div className='container-data-reunion reunion'>
              {sorteo.nombre}
            </div>
            <div className='container-data-reunion m-l-10 dia-triple'>
              {getDayName(concurso.numero_dia)}
            </div>
            <div className='container-data-reunion m-l-10 fecha-triple'>
              {dateTriple}
            </div>
            <div className='container-data-reunion m-l-10 hora-triple'>
              {concurso.hora}
            </div>
          </div>
        </div>
        <div className='main-container-caballos'>
          <div className='container-info-caballos'>
            <div className='caballo1 m-b-20'>
              <div className='animation'>
                <div className='numero1 m-l-10-percent text-caballos-numero'>{/* {casilla1[randCasilla1].nro_caballo} */}</div>
                <div className='texto1 text-caballos-nombre'>{/* {casilla1[randCasilla1].nombre} */}</div>
              </div>
            </div>
            <div className='caballo2 m-b-20'>
              <div className='animation2'>
                <div className='numero2 m-l-10-percent text-caballos-numero'>{casilla2[randCasilla2].nro_caballo}</div>
                <div className='texto2 text-caballos-nombre'>{casilla2[randCasilla2].nombre}</div>
              </div>
            </div>
            <div className='caballo3 m-b-20'>
              <div className='animation3'>
                <div className='numero3 m-l-10-percent text-caballos-numero'>{casilla3[randCasilla3].nro_caballo}</div>
                <div className='texto3 text-caballos-nombre'>{casilla3[randCasilla3].nombre}</div>
              </div>
            </div>
          </div>
        </div>
        <Button onClick={activarAnimacion} className='button-partida' disabled={!!activateAnimation}>
          Partida
        </Button>
      </>
      }
    </div>
  );
};

export default App;
