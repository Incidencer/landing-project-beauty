"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { AiOutlineMenu } from "react-icons/ai"
import MobileNav from "../ui/MobileNav"
import Nav from "./Nav"
import Socials from "./Socials"
import { FaPhoneAlt } from "react-icons/fa"
import { CiMail } from "react-icons/ci";

const Header = () => {
  const [mobileNav, setMobileNav] = useState();
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal">
              <div className="flex gap-2 justify-center items-center text-white">
                <FaPhoneAlt />
                <span>+777 777 777</span>
              </div>
              <div className="flex gap-2 justify-center items-center text-white">
                <CiMail />
                <span>zdespochta@pochta.z</span>
              </div>
            </div>
            <div className="hidden xl:block">
              <Socials containerStyles="text-white text-md flex gap-7" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div>
          <Link href="/">
            <Image src="/assets/logo.svg"
              width={120}
              height={44}
              priority alt="" />
          </Link>
        </div>
        {/* mobile nav trig */}
        <div className="xl:hidden cursor-pointer" onClick={() => setMobileNav(!mobileNav)}>
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        {/* mobile nav */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50">
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        {/* desktop nav */}
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header