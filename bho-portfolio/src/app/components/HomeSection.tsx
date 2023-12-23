import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"

const HomeSection = () => {
  return (
    <section id="home">
        <div>
            <div>
                <Image
                    src={"/images/headshot.png"}
                    alt=""
                    width={325}
                    height={325}
                    className="rounded-full shadow-2xl"
                />
            </div>
            <div className="md:mt-2 md:w-3/5">
                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Brandon!</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                    I&#39;m a{" "}
                    <span className="font-semibold text-teal-600">
                    Software Engineer{" "}
                    </span>
                    based in Atlanta, GA. Working on meaningful projects
                    to make life easier for people!.
                </p>
            </div>
        </div>
    </section>
  )
}

export default HomeSection