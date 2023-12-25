import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"
import { BiLink } from "react-icons/bi";

const projects = [
  {
    name: "CodeMettle's UltiSat",
    description:
      "CodeMettle is a software company focused on NetOps products. Here, I created dashboards to show telemetry data from satellites for our client, UltiSat, integrating UltiSat & Starlink API into the Codemettle System",
    image: "/images/codemettle.png",
    github: "",
    link: "https://codemettle.com",
  },
  {
    name: "Warner Robins Air Logistics",
    description:
      "My first ever internship was on an Air Force base! Can't say much but I did some really cool stuff, mainly I created a Windows Application using C# and WPF",
    image: "/images/warnerrobins.jpeg",
    github: "",
    link: "https://www.facebook.com/402SWEG/",
  },
  {
    name: "This Website!",
    description:
      "A personal website with Next.js styled with Tailwind CSS. The web app also features a random cat image-generating tool using thecatapi.com API.",
    image: "/images/Portfolio.png",
    github: "https://github.com/iphonecats/Bho-Portfolio",
    link: "https://www.linkedin.com/in/brandondho",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold font-mono text-4xl">
        works
        <hr className="w-10 h-2 mx-auto my-3 bg-gray-400 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 font-mono">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BiLink
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;