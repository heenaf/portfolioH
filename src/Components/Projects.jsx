import React from 'react';
import chat from '../assestss/chatbot.png';
import amazon from '../assestss/amazon.png';
import calculator from '../assestss/calculator.png';
import mail from '../assestss/spam.png';
import bike from '../assestss/bikkee.png';
import list from '../assestss/list.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: mail,
      title: "AI-Powered Spam Mail Classifier",
      link: "https://github.com/heenaf/spam-mail-classifier-ai",
      demo: "https://email-spam-ai.onrender.com/",
      description: "Automatically detect and filter spam emails using ML for a safer inbox experience.",
    },
    {
      id: 2,
      src: calculator,
      title: "Calculator",
      link: "https://github.com/heenaf/Calculator-App",
      demo: "https://github.com/heenaf/Calculator-App",
      description: "A simple and user-friendly calculator app",
    },
    {
      id: 3,
      src: chat,
      title: "Smart AI Chatbot Assistant",
      link: "https://github.com/heenaf/zoho-wanderbot",
      demo: "https://zoho-wander-bot.vercel.app/",
      description: " Engage in real-time conversations with an intelligent chatbot designed for seamless travel interaction.",
    },
    {
      id: 4,
      src: amazon,
      title: "Amazon Clone",
      link: "https://github.com/heenaf/Amazon-Clone",
      demo: "https://heenaf-amazon-clone.netlify.app",
      description: "Experience a fully functional replica of Amazon with product listings, cart, and checkout features.",
    },

  
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pt-10">Projects</p>
          <p className="py-8">Below, you'll find a selection of projects I've personally developed and contributed to.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(({ id, src, title, description, link, demo }) => (
            <div
              key={id}
              className="bg-gray-900 shadow-md shadow-gray-600 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={title}
                className="rounded-t-md w-full h-20 object-contain p-2"
              />
              <div className="p-3 text-center">
                <p className="text-sm font-bold">{title}</p>
                <p className="text-xs text-gray-400 mb-2">{description}</p>
                <div className="flex justify-center gap-2 flex-wrap">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs bg-gray-700 text-white rounded hover:bg-gray-800 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
