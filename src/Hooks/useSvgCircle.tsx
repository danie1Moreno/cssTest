import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export const useSvgCircle = () => {
    const svgRef = useRef(null);
    useEffect(() => {
        const svgELem = d3.select(svgRef.current);
        svgELem.append("circle")
        .attr("cx", 150)
        .attr("cy", 70)
        .attr("r",  50)
      }, []);
  return svgRef
}
