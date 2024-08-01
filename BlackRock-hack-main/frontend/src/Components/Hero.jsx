import React from "react";
import { Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <>
      <section className="bg-transparent dark:transparent min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-16 pt-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:w-1/2">
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-lime-300 rounded-full text-black px-4 py-1.5 mr-3">
                New
              </span>
              <span className="text-sm font-medium">
                Enter your portfolio and get suggestions!
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-lime-400">
              Pushing the boundaries of financial inclusion
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
            <div className="flex flex-col mb-0 mt-11 lg:mb-0 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-lime-300 hover:bg-lime-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch demo
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 lg:w-1/2">
            <Image
              isZoomed
              isBlurred
              className="w-full rounded-lg"
              src="https://i.ibb.co/jT2Q8HY/Money-1.jpg"
              alt="office content 1"
            />
            <Image
              isZoomed
              shadow="lg"
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://i.ibb.co/QmrmrqZ/Money-7.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <Divider className="my-4" />
    </>
  );
}

// import React from "react";
// import {Divider} from "@nextui-org/react";
// import {Image} from "@nextui-org/image";
// import Spline from '@splinetool/react-spline';

// export default function Hero(){
//     return(
//         <>

// <section className="bg-transparent dark:transparent">

//     <div className="gap-16 items-center pt-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-16 lg:px-6">

//         <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
//         <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
//             <span className="text-xs bg-lime-300 rounded-full text-black px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Enter your portfolio and get suggestions!</span>
//             <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
//         </a>
//             <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-lime-400">Pushing the boundaries of financial inclusion</h2>
//             <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
//             <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
//             <div className="flex flex-col mb-0 mt-11 lg:mb-0 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
//             <a href="#" className="inline-flex justify-center item3s-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-lime-300 hover:bg-lime-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
//                 Learn more
//                 <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//             </a>
//             <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
//                 <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
//                 Watch demo
//             </a>
//         </div>

//         </div>
//         <div className="grid grid-cols-2 gap-4 mt-8">
//             <Image isZoomed isBlurred className="w-full rounded-lg" src="https://i.ibb.co/jT2Q8HY/Money-1.jpg" alt="office content 1"/>
//             <Image isZoomed shadow="lg" className="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.ibb.co/QmrmrqZ/Money-7.jpg" alt="office content 2"/>
//         </div>
//     </div>
// </section>
// <Divider className="my-4" />
//         </>
//     )

// }
