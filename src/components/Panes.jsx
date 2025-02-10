import React, { useState, useEffect } from "react";
import { getPanes } from "../firebase/api";
import { Space } from "antd";

function Panes() {
  const [panes, setPanes] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getPanes();
        setPanes(data);
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
      {panes.map((data, index) => (
        <div className="flex  mx-3 bg-yellow-100 rounded-2xl p-2 shadow-md" key={index}>
          <h1 className="text-center font-bold text-yellow-800">
            {data.name.toUpperCase()}
          </h1>

          <div className="flex self-center">
            <div className="rounded-md bg-yellow-600 mx-2">
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

export default Panes;
