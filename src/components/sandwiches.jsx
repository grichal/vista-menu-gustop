import React, { useState, useEffect } from "react";
import { getSandwiches } from "../firebase/api";
import { Space } from "antd";

function Sandwiches() {
  const [sandwiches, setSandwiches] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getSandwiches();
        setSandwiches(data);
        console.log(data);
      } catch (error) {
        console.error("error loading data", error);
        throw error;
      }
    };
    getdata();
  }, []);

  return (
    <>
      {" "}
      <Space direction="horizontal" className="flex flex-wrap justify-center mb-5">
        {sandwiches.map((data, index) => (
          <div className="flex flex-col mx-3 bg-amber-100 rounded-md p-2 shadow-md" key={index}>
            <h1
              className="text-center font-bold text-amber-800 max-w-3xs text-xl
      "
            >
              {data.nombre.toUpperCase()}
            </h1>
            
            <div className="flex self-center">

            {data.price6 ? (<>
              <div className="rounded-md bg-amber-600 mx-2">
                <p className="text-base m-1 text-md font-bold text-yellow-100">${data.price6}</p>
                <p className="text-xs absolute -my-9 ml-10 bg-yellow-700 p-1 rounded-2xl text-white">6'</p>
              </div>
              <div className="rounded-md bg-amber-600 mx-2">
                <p className="text-base m-1 text-md font-bold text-yellow-100">${data.price12}</p>
                <p className="text-xs absolute -my-9 ml-10 bg-yellow-700 p-1 rounded-2xl text-white">12'</p>
              </div></>):(<>
                <div className="rounded-md bg-amber-600 mx-2">
                <p className="text-base m-1 text-md font-bold text-yellow-100">${data.price12}</p>
              </div>
              </>)}

            </div>
            <div className="w-full h-[2px] bg-amber-800 my-2"></div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-1 self-baseline">
              {data.ingredientes.map((data,index)=>(
              <p key={index} className="font-bold text-xs mt-0 text-start text-amber-700">{data.ingrediente.toUpperCase()}</p>

              ))}
            </div>
          </div>
        ))}
      </Space>
    </>
  );
}

export default Sandwiches;
