import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex justify-between p-5 pointer-events-auto bg-green-800 text-white">
        <div className="capitalize font-bold text-2xl ">
          <h1 className="pointer">build</h1>
        </div>
        <ul className="flex justify-center gap-12 capitalize font-bold text-2xl">
          <li>
            <Link href="/navbar" className="">
              navbar
            </Link>
          </li>

          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
        </ul>
        <div className="">
          <input
            className="rounded-full p-1"
            type="text"
            placeholder="search here"
          />
        </div>
      </div>
      <div className="bg-scroll bg-navimg h-[80vh] bg-contain bg-center justify-center text-center ">
        <h1 className="capitalize font-bold text-green-600  hover:text-green-700  text-center pt-32 text-5xl cursor-pointer">
          professional
        </h1>
        <h1 className="capitalize font-bold text-white  text-center pt-10 text-5xl">
          plasterers in london
        </h1>

        <button className="cursor-pointer h-10 bg-green-700 text-white mt-10 font-bold w-32 rounded-full capitalize hover:bg-green-800">
          contact
        </button>
      </div>
      <>
        <div className="">
          <h1 className="capitalize text-center font-bold text-3xl mt-10 ">
            our services
          </h1>
          <hr className=" h-2 w-full bg-green-700" />

          <div className=" flex justify-center gap-10">
            <div className="flex items-center justify-center h-96">
              <div className=" w-60 bg-slate-200 rounded-lg text-center justify-center shadow-2xl ">
                <div className="bg-service1 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">Welcome to my app</h1>
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
                <h1 className="text-3xl font-bold mb-4">Welcome to my app</h1>
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
                <h1 className="text-3xl font-bold mb-4">Welcome to my app</h1>
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
                <h1 className="text-3xl font-bold mb-4">Welcome to my app</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi. Vestibulum in porttitor
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="">
          <h1 className="capitalize text-center font-bold text-3xl mt-10 ">
            what our clints says
          </h1>
          <hr className=" h-2 w-full bg-green-700" />
          <div className="flex justify-center gap-5">
            <div className="flex items-center justify-center h-96">
              <div className=" w-60  rounded-lg text-center justify-center  ">
                <div className="bg-service3 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">kalam</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-96">
              <div className=" w-60  rounded-lg text-center justify-center  ">
                <div className="bg-service3 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">kalam</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center h-96">
              <div className=" w-60  rounded-lg text-center justify-center  ">
                <div className="bg-service3 h-32 w-32 ml-14 bg-contain  rounded-full items-center"></div>
                <h1 className="text-3xl font-bold mb-4">kalam</h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vitae lectus est. Nulla facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="flex justify-evenly gap-20 h-[70vh]">
          <div className="capitalize  w-52 font-bold text-2xl">
            <h1 className="text-4xl">contact us</h1>
            <p className="mt-10">main street 12346</p>
            <p className="mt-7">03112209988</p>
            <p className="mt-7">aliyan ali@gmail.com</p>
          </div>
          <div className=" bg-green-700 w-96 h-96 rounded-lg shadow-lg text-center capitalize">
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

          </div>
      </>
    </main>
  );
}
