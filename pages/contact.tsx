import React from 'react'

function contact() {
  return (
    <>
      <div className=" bg-green-700 w-96 h-96 rounded-lg shadow-lg text-center ml-96 mt-32 capitalize">
            <h1 className="text-4xl font-bold">get in touch</h1>
            <div className="grid text-center">
              <input
                className="rounded-full h-10 w-72 ml-12 mt-10 p-1"
                type="text"
                placeholder="enter your name"
              />
              <input
                className="rounded-full h-10 ml-12 w-72 mt-10 p-1"
                type="text"
                placeholder="enter your email"
              />
            </div>

            <button className="cursor-pointer  h-10 bg-white hover:text-white mt-16 font-bold w-32 rounded-full capitalize hover:bg-green-800">
              contact now
            </button>
          </div>
    </>
  )
}

export default contact