import React,{useEffect,useState} from 'react'
import { getPromos, getProteinas } from '../firebase/api';
import { Space } from 'antd';
import Promos from './Promos';

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

  <Space direction="" className="flex flex-wrap justify-center">
    {proteinas.map((data,index)=>(
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

export default Proteinas