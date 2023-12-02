import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
//import * as topojson from "topojson-client";
import data from "../assets/world.json"
import { useSvgCircle } from "../Hooks/useSvgCircle";
import { useMultiCircles } from "../Hooks/useMultiCircles";



const DrawBoard = () => {
  
  const width = 928;
  const height = 500;
  const world=data
  //const countries=topojson.feature(world, world.objects.countries).features
  //const borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
  //const land= topojson.feature(world, world.objects.land)
  const svgRef = useSvgCircle()
  const svgRef2= useMultiCircles()

  return (
    <div>
      <svg ref={svgRef} viewBox="0 0 500 150"/>
      <svg ref={svgRef2.svgRef} viewBox="0 0 500 150">
      {svgRef2.dataset.map(([x, y], i) => (
        <circle
        key={i}
          cx={x}
          cy={y}
        />
      ))}
    </svg>
    </div> 
  );
};

export default DrawBoard;
