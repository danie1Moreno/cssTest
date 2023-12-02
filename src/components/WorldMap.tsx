import * as d3 from "d3";
import { useChartDimensions } from "../Hooks/useChartDimensions";
import { countryShapes } from "./country-shapes";


const WorldMap = () => {
    //console.log(d3)
    const [ref, dms] = useChartDimensions()
   let shapes=countryShapes()
  // this is the definition for the whole Earth
  const sphere = { type: "Sphere" }
  const projectionFunction = d3.geoGnomonic
  const projection = projectionFunction()
    .fitWidth(dms.width, sphere)
  const pathGenerator = d3.geoPath(projection)
  // size the svg to fit the height of the map
  const [
    [x0, y0],
    [x1, y1]
  ] = pathGenerator.bounds(sphere)
  const height = y1
  return (
    <div ref={ref}
    style={{
      width: "100%",
    }}>
        <svg width={dms.width} height={height}>
        <defs>
{/* some projections bleed outside the edges of the Earth's sphere */}
{/* let's create a clip path to keep things in bounds */}
          <clipPath id="Map__sphere">
            <path d={pathGenerator(sphere)} />
          </clipPath>
        </defs>
        <path
          d={pathGenerator(sphere)}
          fill="#f2f2f7"
        />
        <g style={{ clipPath: "url(#Map__sphere)" }}>
          {/* we can even have graticules! */}
          <path
            d={pathGenerator(d3.geoGraticule10())}
            fill="none"
            stroke="#fff"
          />
          {shapes.map((shape,i) => {
            return (
              <path
                key={i+"map"}
                d={pathGenerator(shape)}
                fill="#9980FA"
                stroke="#fff"
              >
                <title>
                  {shape.properties.name}
                </title>
              </path>
            )
          })}
        </g>
      </svg>

    </div>
  )
}

export default WorldMap