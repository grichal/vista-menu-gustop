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
      <Space direction="horizontal" className="flex flex-wrap justify-center">
        {sandwiches.map((data, index) => (
          <div className="flex flex-col mx-3 bg-amber-100 rounded-2xl p-2 shadow-md" key={index}>
            <h1
              className="text-center font-bold text-amber-800
      "
            >
              {data.nombre.toUpperCase()}
            </h1>
            
            <div className="flex self-center">
              <div className="rounded-md bg-amber-600 mx-2">
                <p className="text-base m-1 text-md font-bold text-yellow-100">${data.price6}</p>
              </div>
              <div className="rounded-md bg-amber-600 mx-2">
                <p className="text-base m-1 text-md font-bold text-yellow-100">${data.price12}</p>
              </div>
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
