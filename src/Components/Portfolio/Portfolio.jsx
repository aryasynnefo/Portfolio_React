import React from 'react'
import arrayDestruct from "/images/arrayDestruct.avif"
import installNode from "/images/installNode.jpg"
import navbar from "/images/navbar.avif"
import reactParallax from "/images/reactParallax.jpg"
import reactSmooth from "/images/reactSmooth.jpg"
import reactWeather from "/images/reactWeather.jpg"
import usestate from "/images/usestate.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      link:"https://github.com/aryasynnefo/Portfolio_React",
      
    },
    {
      id: 2,
      src: reactParallax,
      link:"https://github.com/aryasynnefo/Fake_API"
      
    },
    {
      id: 3,
      src: navbar,
      link:"https://github.com/aryasynnefo/BookMyShow"
    },
    {
      id: 4,
      src: reactSmooth,
      link:"https://github.com/aryasynnefo/Hexashop_react"

    },
    {
      id: 5,
      src: installNode,
      link:"https://aryasynnefo.github.io/DRESSCODE_HTML_CSS_BOOTSTRAP/"
    },
    {
      id: 6,
      src: reactWeather,
      link:"https://aryasynnefo.github.io/FRESHMART_HTML_CSS_FLEX_GRID_BOOTSTRAP/"

    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,link,title}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
               <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div>
    //   <div>
    //     <div>
    //       <p>Portfolio</p>
    //       <p>Check out some of my work here</p>
    //     </div>
    //     <div>
    //       <div>
    //         <img src="" alt="" />
    //         <div>
    //           <button></button>
    //           <button></button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Portfolio