import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {max,scaleSqrt  } from 'd3';
import { useUSGeo } from './useUSGeo';
import { useData } from './useData';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const maxRadius = 20;

const App = () => {
  const USGeo = useUSGeo();
  const data = useData();

  if (!USGeo || !data) {
    return <pre>Loading...</pre>;
  }
  const sizeValue = d => d.pop2020;
  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius]);
  
   console.log(data[0]);
  
  return (
    <svg width={width} height={height}>
      <Marks 
        USGeo={USGeo} 
        data={data} 
        sizeScale={sizeScale}
        sizeValue={sizeValue}
        />
    </svg>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
