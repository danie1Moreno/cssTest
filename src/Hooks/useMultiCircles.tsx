import { useRef, useEffect,useState } from "react";
import * as d3 from "d3";
import { useInterval } from "./useInterval";

const genData = () => {
    return [
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
      [Math.random() * 400, Math.random() * 150],
 
    ];
  };

export const useMultiCircles = () => {
    const [dataset, setDataset] = useState<number[][]>(
        genData()
      )
  const svgRef = useRef(null);
  useInterval(() => {
    const newDataset = genData()
    setDataset(newDataset)
  }, 2000)
  useEffect(() => {
    const svgELem = d3.select(svgRef.current);
    svgELem.selectAll("circle")
      .data(dataset)
      .join("circle")
        .attr("cx", d => d[0])
        .attr("cy", d => d[1])
        .attr("r",  10)
  }, [dataset]);
  return {svgRef, dataset};
};
