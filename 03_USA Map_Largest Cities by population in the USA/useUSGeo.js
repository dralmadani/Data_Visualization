import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson';

const jsonUrl =
  'https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/states-10m.json';

// const jsonUrl =
//   'https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/states-albers-10m.json';

export const useUSGeo = () => {
  const [data, setData] = useState(null);
	// console.log(data);
  
  useEffect(() => {
    json(jsonUrl).then(topojsonData => {
      const { states } = topojsonData.objects;
      // console.log(topojsonData);
      setData(feature(topojsonData, states));
    });
  }, []);

  return data;
};
