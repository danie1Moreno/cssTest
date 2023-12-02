import { ResizeObserver } from '@juggle/resize-observer';
import { useRef, useEffect, useState } from "react";

interface dimensionsTypes{
    marginTop:number,
    marginBottom:number,
    marginRight:number,
    marginLeft:number,
    width:number,
    height:number
}


const combineChartDimensions = (dimensions:dimensionsTypes) => {
    
    const parsedDimensions = {
        ...dimensions,
        marginTop: dimensions.marginTop || 10,
        marginRight: dimensions.marginRight || 10,
        marginBottom: dimensions.marginBottom || 40,
        marginLeft: dimensions.marginLeft || 75,
    }
    return {
        ...parsedDimensions,
        boundedHeight: Math.max(
          parsedDimensions.height
          - parsedDimensions.marginTop
          - parsedDimensions.marginBottom,
          0,
        ),
        boundedWidth: Math.max(
          parsedDimensions.width
          - parsedDimensions.marginLeft
          - parsedDimensions.marginRight,
          0,
        ),
    }
  }

export const useChartDimensions = () => {
  const ref = useRef();
  //console.log(passedSettings)
  const dimensions = combineChartDimensions({
    marginTop:0,
    marginBottom:0,
    marginRight:0,
    marginLeft:0,
    width:800,
    height:800
});

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    //if (dimensions.width && dimensions.height) return [ref, dimensions];

    const element = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      if (!Array.isArray(entries)) return;
      if (!entries.length) return;

      const entry = entries[0];

      if (width != entry.contentRect.width) setWidth(entry.contentRect.width);
      if (height != entry.contentRect.height)
        setHeight(entry.contentRect.height);
    });
    //console.log(resizeObserver, element)
    resizeObserver.observe(ref.current);
    console.log(resizeObserver)
    return () => resizeObserver.unobserve(element);
  }, []);

  const newSettings = combineChartDimensions({
    ...dimensions,
    width: dimensions.width || width,
    height: dimensions.height || height,
  });

  return [ref, newSettings];
};
