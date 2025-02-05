import React from 'react'

function Wraps() {
  return (
    <div className="flex flex-col mx-3">
      <h1>Burrito</h1>
      <div className="w-full h-[2px] bg-gray-400 my-2"></div>
      <div className="flex self-center">
        <div className="bg-amber-400 rounded-md mx-2">
          <p className="text-base m-1">$RD 360</p>
        </div>
        <div className="bg-amber-400 rounded-md mx-2">
          <p className="text-base m-1">$RD 360</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-1 self-baseline">
        <p className="text-base mt-0">mortadella</p>
        <p className="text-base mt-0">mortadella</p>
        <p className="text-base mt-0">mortadella</p>
        <p className="text-base mt-0">mortadella</p>
        <p className="text-base mt-0">mortadella</p>
        <p className="text-base mt-0">mortadella</p>
      </div>
    </div>
  )
}

export default Wraps