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
    <div key={index} className="bg-amber-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-70">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-amber-900">{data.nombre}</h3>
        <div className="flex flex-col items-end">
        {data.price6 ? (<>
          <span className="text-base font-bold text-amber-600">${data.price6}</span>
          <span className="text-base font-bold text-amber-600">${data.price12}</span>
        </>):(<>
          <span className="text-base font-bold text-amber-600">${data.price12}</span>
          </>)}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-1">
        {data.ingredientes.map((item, index) => (
          <p key={index} className="text-amber-700 text-sm break-words">
            {item.ingrediente}
            {index !== data.ingredientes.length - 1 && ","}
          </p>
        ))}
      </div>
    </div>
  ))}
</Space>
    </>
  );
}

export default Sandwiches;
