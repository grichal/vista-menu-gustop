import React, { useState, useEffect } from "react";
import { getEnsaladas } from "../firebase/api";
import { Space } from "antd";



function Ensaladas() {
  const [ensaladas, setEnsaladas] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getEnsaladas();
        setEnsaladas(data);
        console.log(data);
      } catch (error) {
        console.error("error loading data", error);
        throw error;
      }
    };
    getdata();
  }, []);
  
  return (
    <Space direction="" className="flex flex-wrap justify-center">
    {ensaladas.map((data,index)=>(
        <div className="flex flex-row mx-3 my-5" key={index}>
        <h1 className='text-base'>{data.name}</h1>
          <div className="bg-amber-400 rounded-md mx-2">
            <p className="text-base m-0.5">${data.price}</p>
          </div>
      </div>
    ))}


</Space>
  )
}

export default Ensaladas;