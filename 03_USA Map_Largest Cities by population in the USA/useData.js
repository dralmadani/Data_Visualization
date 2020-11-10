import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/dralmadani/c04f95746e2f36b040d3d764ab7b9c62/raw/0ac9460c0bce221efb38a8a75beeb00d6c315023/LargestCitiesPopulation2020USwithLongitude_Latitude.csv';
//const csvUrl = 'https://gist.githubusercontent.com/dralmadani/fa040a3a109bd938347572012a24f2fc/raw/211e765d3702af40b6553b3397abe4b95dbcc80b/CitiesPopulation2020USA.csv';



export const useData = () => {
  const [data, setData] = useState(null);
console.log(data)
  useEffect(() => {
    const row = d => {
      
      d.latitude = +d["latitude"];
      //d["longitude"] = +d["longitude"];
      //if(d.longitude > 0) {
      	d["longitude"] = +d["longitude"] * -1;
      //}
      
      d.pop2020 = +d.pop2020
      d.pop2010 = +d.pop2010
      return d;
      
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
//   console.log(data);
  
//   for (let i in data)
//   	{console.log(data[i].armed);}
  return data;
};