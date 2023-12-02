import { useEffect } from 'react';
 
export const useInterval=(callback:VoidFunction, delay:number)=> {
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(callback, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}