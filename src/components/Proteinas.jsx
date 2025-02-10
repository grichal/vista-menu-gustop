import React, { useEffect, useState } from "react";
import { getProteinas } from "../firebase/api";
import { Space } from "antd";

function Proteinas() {
  const [proteinas, setProteinas] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getProteinas();
        setProteinas(data);
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
      {proteinas.map((data, index) => (
        <div className="flex mx-3 bg-yellow-100 rounded-2xl p-2 shadow-md" key={index}>
          <h1 className="text-center font-bold text-yellow-900">
            {data.name.toUpperCase()}
          </h1>

          <div className="flex self-center">
            <div className="rounded-md bg-yellow-700 mx-2">
              <p className="text-base m-1 text-md font-bold text-yellow-100">
                ${data.price}
              </p>
            </div>
          </div>
          
        </div>
      ))}
    </Space>
  );
}

export default Proteinas;
