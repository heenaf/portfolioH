import React from 'react';
import aaga from '../assestss/aaga-removebg-preview.png';
import amazon from '../assestss/amazon-removebg-preview.png';
import bike from '../assestss/brs-removebg-preview.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: aaga,
      title:"Grow Green Your AI Gardening Assistant",
      description:"Personalized Care and Connected Community",

    },
    {
      id: 2,
      src: amazon,
      title: "Amazon clone",
      description:" E commerce platform with user-friendly shopping experience and core functionalities", 
    },
    {
      id: 3,
      src: bike,
      title:"Java Bike Rental System",
      description:"Simplifying Rentals for Users and Businesses",

    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Below, you'll find a selection of projects I've personally developed and contributed to.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {projects.map(({ id, src,title, description }) => (
  <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
    <img src={src} alt="" className="rounded-md duration-200 hover:scale-100 " />
    <p className="mt-4">{title}</p>
    <p className="text-sm text-gray-500">{description}</p>  
  </div>
))}

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
