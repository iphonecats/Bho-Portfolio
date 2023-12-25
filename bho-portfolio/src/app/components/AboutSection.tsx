import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "C#" },
  { skill: "API" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Vue.js" },
  { skill: "Tailwind CSS" },
  { skill: "Android Development" },
  { skill: "XML" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "WPF" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl font-mono">
          About Me
          <hr className="w-10 h-2 mx-auto my-3 bg-gray-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left ">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold font-mono mb-6 md:text-left">
              A tiny introduction...
            </h1>
            <div>
              <p>
                Hello, my name is Brandon and I am a{" "}
                <span className="font-bold">{" curious"}</span>,
                <span className="font-bold">{" compassionate"}</span>, and
                <span className="font-bold">{" driven"}</span> software engineer
                from Suwanee, GA. My goal is to be a well rounded full stack engineer, mastering
                the e2e development and deployment of any software application.
              </p>
              <br />
              <p>
                I currently attend the Georgia Institute of Technology
                pursuing a BS in Computer Science. In school, I am a part of the Mens Volleyball Club and
                the Vietnamese Student Association.
              </p>
              <br />
              <p>
                I have many interests including entrepreneurship, sports/gym, food/cooking, as well as talking about 
                the political and economic state of the world. I constantly seek new challenges and to self improve
                on a daily basis!
              </p>
              <br />
              <p>
                I believe that you should{" "}
                <span className="font-bold text-blue-400">
                  always seek new challenges
                </span>{" "}
                and that way you will continually grow. I love making people smile and
                my mission is to do so through software.
              </p>
            </div>
            
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold font-mono mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <hr className="w-4 h-1 mx-auto my-2 bg-black border-0 rounded"></hr>
            <div>
              <div className="pr-2">
                <Image
                  src="/images/volleyball.JPG"
                  alt=""
                  width={250}
                  height={250}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection