import React from 'react'
import html from "../assestss/html-removebg-preview.png";
import css from "../assestss/css-removebg-preview.png";
import javascript from "../assestss/javascript-removebg-preview.png";
import react from "../assestss/react-removebg-preview.png";
import tailwind from "../assestss/tailwind-removebg-preview.png";
import java from "../assestss/java.png";
const Experience = () => {

  const techs =[
    {
      id : 1,
      src: html,
      title :'HTML',
      style: 'shadow-orange-500'
    },
    {
      id : 2,
      src: css,
      title :'CSS',
      style: 'shadow-blue-500'
    },
    {
      id : 3,
      src: javascript,
      title :'JAVA SCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id : 4,
      src: react,
      title :'REACT',
      style: 'shadow-blue-600'
    },
    {
      id : 5,
      src: tailwind,
      title :'TAILWIND',
      style: 'shadow-sky-400'
    },
    {
      id : 6,
      src: java,
      title :'JAVA',
      style: 'shadow-sky-700'
    },
   
  ]
  return (
  
    <div id="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 pt-10">
          <p className="text-4xl font-bold border-b-4 border-gray-500 pt-2 inline">Experience</p>
          <p className="py-6">Technologies I can flex</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-1 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;