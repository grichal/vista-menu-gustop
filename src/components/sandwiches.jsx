"use client"

import { useState, useEffect } from "react"
import { getSandwiches } from "../firebase/api"
import { Space, Badge } from "antd"

function Sandwiches() {
  const [sandwiches, setSandwiches] = useState([])

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getSandwiches()
        setSandwiches(data)
        console.log(data)
      } catch (error) {
        console.error("error loading data", error)
        throw error
      }
    }
    getdata()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Space direction="horizontal" className="flex flex-wrap justify-center gap-6">
        {sandwiches.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-64 border border-amber-100"
          >
            {/* Image container with fixed height */}
            <div className="h-40 overflow-hidden relative">
              {data.imageUrl ? (
                <img
                  src={data.imageUrl || "/placeholder.svg"}
                  alt={data.nombre}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-800">No image available</span>
                </div>
              )}
              {/* Price badge */}
              <div className="absolute top-3 right-3 flex flex-col gap-1">
                {data.price6 ? (
                  <>
                    <Badge.Ribbon text={`$${data.price8 || data.price6}`} color="#f59e0b" className="font-bold" />
                    <Badge.Ribbon text={`$${data.price12}`} color="#d97706" className="font-bold mt-6" />
                  </>
                ) : (
                  <Badge.Ribbon text={`$${data.price12}`} color="#d97706" className="font-bold" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-amber-900 mb-2 truncate">{data.nombre}</h3>

              <div className="flex flex-wrap gap-1 text-sm">
                {data.ingredientes.map((item, index) => (
                  <span key={index} className="inline-block bg-amber-50 text-amber-700 px-2 py-1 rounded-full text-xs">
                    {item.ingrediente}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Space>
    </div>
  )
}

export default Sandwiches

