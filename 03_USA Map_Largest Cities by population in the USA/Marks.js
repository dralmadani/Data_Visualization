import {
  geoIdentity,
  geoPath,
  geoConicConformal,
  geoOrthographic,
  geoAlbersUsa,
  geoAlbers,
  geoNaturalEarth1,
  geoGraticule
} from 'd3';


// Multiple types of projection, commented out for easy switching
// const projection = geoIdentity().reflectY(true);
// const projection = geoIdentity();
// const projection = geoNaturalEarth1();
//const projection = geoAlbersUsa();
const projection = geoAlbers();
//const projection = geoNaturalEarth1();
//const path = geoPath(projection);


const path = geoPath(projection);

export const Marks = ({ USGeo, data,sizeScale, sizeValue }) => {
  
 //projection.fitExtent([[0,0],[960,500]], USGeo);
  // console.log(USGeo);
  return (
   
    <g className="marks">
      {USGeo.features.map(feature => (
        <path d={path(feature)} />
      ))}


      {data.map(d => {

				const [x, y] = projection([d.longitude, d.latitude]);
        //console.log(x,y);
        return <circle cx={x} cy={y}  r={sizeScale(sizeValue(d))} />;

  			
 
      })}
      
    </g>
  );
};
