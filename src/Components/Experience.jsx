import React from 'react'
import react from "../assestss/react-removebg-preview.png";
import tailwind from "../assestss/tailwind-removebg-preview.png";
import java from "../assestss/java.png";
import htmlcss from "../assestss/html-css-js.png";
import flutter from "../assestss/flutter.png";
import python from "../assestss/python.png";
const Experience = () => {

  const techs =[
    {
      id : 1,
      src: htmlcss,
      title :'HTML,CSS,JS',
      style: 'shadow-orange-500'
    },
    {
      id : 2,
      src: java,
      title :'Java',
      style: 'shadow-red-700'
    },
    {
      id : 3,
      src: python,
      title :'Python',
      style: 'shadow-yellow-500'
    },
    {
      id : 4,
      src: react,
      title :'React JS',
      style: 'shadow-blue-400'
    },
    {
      id : 5,
      src: flutter,
      title :'Flutter',
      style: 'shadow-sky-800'
    },
    {
      id : 6,
      src: tailwind,
      title :'Tailwind CSS',
      style: 'shadow-white'
    },
   
  ]
  return (
  
   <div id="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
  <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    <div className="pb-8 pt-10">
      <p className="text-4xl font-bold border-b-4 border-gray-500 pt-2 inline">Skills</p>
      <p className="py-6">Technologies I use to build scalable and interactive applications</p>
    </div>

    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 px-4 sm:px-8">
      {techs.map(({ id, src, title, style }) => (
        <div
          key={id}
          className={`flex flex-col items-center justify-center shadow-md hover:scale-105 duration-500 py-6 px-4 rounded-xl ${style}`}
        >
          <img src={src} alt={title} className="w-20 h-20 object-contain" />
          <p className="mt-4 text-lg font-medium">{title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Experience;