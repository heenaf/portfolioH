import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

const Home = () => {
  return (
    <div name="home" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row md:items-center md:justify-center h-screen px-4">
      <div class="flex flex-col justify-center h-full">
    <h2 class="text-4xl sm:text-5xl font-bold text-white w-max font-bold">  {/* Added w-3/4 */}
        Hi,My name is Heena Fathima H.
    </h2>
     <h2 class="text-4xl sm:text-5xl font-bold text-gray-400 w-max font-bold">  {/* Added w-3/4 */}
        I am a Full Stack Developer !
    </h2>
    <p class="text-gray-500 py-4 max-w-md  w-max"> {/* Added w-3/4 */}
      With a solid foundation in HTML, CSS, and JavaScript, and hands-on experience in React.js and Tailwind CSS, I craft responsive and dynamic web applications.
Skilled in both front-end and back-end development with Java and Python, I bridge design with functionality.
Driven by curiosity and a passion for clean, impactful code, I love turning ideas into interactive experiences.
Let’s connect and build something remarkable together!
    </p>
</div>

      </div>
    </div>
  );
};

export default Home;