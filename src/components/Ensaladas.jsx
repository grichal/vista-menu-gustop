import React, { useState, useEffect } from "react";
import { getEnsaladas } from "../firebase/api";
import { Space } from "antd";

const Ensaladas=()=> {
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
    <Space direction="horizontal" className="flex flex-wrap justify-center">
      {ensaladas.map((data, index) => (
        <div className="flex mx-3 bg-green-100 rounded-md p-2 shadow-md" key={index}>
          <h1 className="text-base text-center font-bold text-green-800">
            {data.name.toUpperCase()}
          </h1>

          <div className="flex self-center">
            <div className="rounded-md bg-green-600 mx-2">
              <p className="text-base m-1 text-md font-bold text-green-100">
                ${data.price}
              </p>
            </div>
          </div>

        </div>
      ))}
    </Space>
  );
}

export default Ensaladas;
