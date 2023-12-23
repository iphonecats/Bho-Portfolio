"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HomeSection = () => {
  return (
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-10 md:py-20 md:flex-row md:space-x-4 md:text-left">
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
                    <span className="font-semibold text-blue-400">
                    Software Engineer{" "}
                    </span>
                    based in Atlanta, GA. Working on meaningful projects
                    to make life easier for people!
                </p>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default HomeSection