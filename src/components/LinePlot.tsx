import * as d3 from "d3";
interface plotTypes{
    data: number[] ;
    width?: number | undefined;
    height?: number | undefined;
    marginTop?: number | undefined;
    marginRight?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
}

export default function LinePlot({
  data=[1.2222665553554,1.323223232323232],
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20
}:plotTypes) {

    
  const x = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  return (
    <svg width={width} height={height}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data)}
      />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}