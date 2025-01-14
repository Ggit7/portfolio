import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id="work" className="w-full px-6 md:px-12 py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio. Explore a collection of projects showing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative group h-80 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${project.bgImage})` }}

          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-5 px-6 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg">
              <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a
                  target="blank"
                  href={project.link}
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <Image
                    src={assets.send_icon}
                    alt="Send Icon"
                    className="w-5"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
