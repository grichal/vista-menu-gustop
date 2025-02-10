import React, { useState, useEffect } from "react";
import { getWraps } from "../firebase/api";
import { Space } from "antd";

function Wraps() {
  const [wraps, setWraps] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getWraps();
        setWraps(data);
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
      <Space direction="horizontal" className="flex flex-wrap justify-center">
        {wraps.map((data, index) => (
          <div className="flex flex-col mx-3 bg-teal-100 rounded-2xl p-2 shadow-md" key={index}>
            <h1 className="text-center font-bold text-teal-800">
              {data.name.toUpperCase()}
            </h1>
            
            <div className="flex self-center">
              <div className="rounded-md bg-teal-600 mx-2">
                <p className="text-base m-1 text-md font-bold text-teal-100">${data.price}</p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-teal-800 my-2"></div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-1 self-baseline">
              {data.ingredientes.map((data, index) => (
                <p key={index} className="font-bold text-xs mt-0 text-start text-teal-700">
                  {data.ingrediente.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Space>
    </>
  );
}

export default Wraps;
