"use client" // this is a client component
import React from 'react'
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "🐈",
    page: "cat",
  },
]

const NavBar = () => {

  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-blue-300 border rounded-b-xl">
      <div className="justify-between md:item-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block hover:text-gray-500">
            <Link to="home" smooth={true} >
              <div className="container flex items-center space-x-2 ">
                <h2 className="text-2xl font-extrabold">Brandon Ho</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button 
                className="p-2 text-black rounded-md outline-none focus:border-gray-500 focus:border"
                onClick={() => setNavbar(!navbar)}
                >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div
            className={`items-center flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-mono">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                        "lg:inline-block hover:text-neutral-500 border-2 rounded border-gray-500 p-1 flex items-center justify-center"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar