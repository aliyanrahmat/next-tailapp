import React from 'react'

function gallery() {
  return (
    <div>
      <div className="">
          <h1 className="capitalize text-center font-bold text-3xl mt-10 ">
            our gallery
          </h1>
          <hr className=" h-2 w-full bg-green-700" />

          <div className=" flex justify-center gap-10">
            <div className="flex items-center justify-center h-96">
              <div className=" w-60 bg-slate-200 rounded-lg text-center justify-center shadow-2xl ">
                <div className="bg-service1 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">professional workers</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi. Vestibulum in porttitor
                  elit.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-96">
              <div className="-96 w-60 bg-slate-200 rounded-lg text-center justify-center shadow-2xl ">
                <div className="bg-service2 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">professional workers</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi. Vestibulum in porttitor
                  elit.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center h-96">
              <div className=" w-60 bg-slate-200 rounded-lg text-center justify-center shadow-2xl ">
                <div className="bg-service3 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">professional workers</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi. Vestibulum in porttitor
                  elit.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center h-96">
              <div className=" w-60 bg-slate-200 rounded-lg text-center justify-center shadow-2xl ">
                <div className="bg-service3 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">professional workers</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi. Vestibulum in porttitor
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
    
      
    </div>
  )
}

export default gallery