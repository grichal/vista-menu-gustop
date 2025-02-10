import React,{useEffect,useState} from 'react'
import { getPromos } from '../firebase/api';
import { Space } from 'antd';

function Promos() {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getPromos();
        setPromos(data);
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
    {promos.map((data,index)=>(
        <div className="flex flex-row mx-3 my-5" key={index}>
        <h1 className='text-center font-bold'>{data.name.toUpperCase()}</h1>
          <div className="bg-amber-400 rounded-md mx-2">
            <p className="text-base m-0.5">${data.price}</p>
          </div>
      </div>
    ))}


</Space>
  )
}

export default Promos