//custom hook to fetch data from an API
import { useState } from 'react';
function useArray(url) {
  const [data, setData] = useState([]);
  const push = (newData) => {
    console.log("push function called");
    setData([...data,newData]);
  };
  return { data, push };
}
export default useArray;