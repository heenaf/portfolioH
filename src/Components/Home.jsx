import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

const Home = () => {
  return (
    <div name="home" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row md:items-center md:justify-center h-screen px-4">
      <div class="flex flex-col justify-center h-full">
    <h2 class="text-7xl sm:text-5xl font-bold text-white w-max font-bold">  {/* Added w-3/4 */}
        I am a Full Stack Developer !
    </h2>
    <p class="text-gray-500 py-4 max-w-md  w-max"> {/* Added w-3/4 */}
        Specializing in HTML, CSS, JavaScript, and frameworks like Bootstrap, Tailwind, and React.js, I bring designs to life with creativity and precision. Let's collaborate and turn ideas into reality. Reach out, and let's build something remarkable together!
    </p>
</div>

      </div>
    </div>
  );
};

export default Home;
