import React, { useState } from "react";
import ArrowDown from "../Vectors/ArrowDown";
import { motion } from "framer-motion";
import Logo from "../Vectors/Logo";
import { useNavigate } from "react-router";
import HandBugger from "../Vectors/HandBugger";
import { fadeInUp } from "../../variant";
import RiseLogo from "../Vectors/RiseLogo";
import { AiOutlineClose } from "react-icons/ai";

type tab = {
  active_Tab?: boolean;
  setActive?: (value: string) => void;
  currentPath?: string;
  tabs: any;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Nav = ({ active_Tab, tabs, currentPath, setActive = () => {} }: tab) => {
  const [activeTab, setActiveTab] = useState<"top" | "bottom">("top");
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate();
  return (
    <div className=" w-[95%] md:w-[95%] lg:w-[80%] mx-auto">
      <div className="relative flex justify-between py-4 lg:mx-4">
        <div
          onClick={() => navigate("/home")}
          className="flex gap-[5px] relative rise-container"
        >
          <Logo />
          <span
            onClick={() => {
              setActiveTab("top");
            }}
            className={`circle cursor-pointer ${
              activeTab == "bottom" ? "rise" : activeTab == "top" ? "fall" : ""
            }`}
          ></span>
        </div>
        <HandBugger
          className={` sm:hidden md:hidden `}
          onClick={() => setOpenNav(true)}
        />
        <div className=" cursor-pointer hidden sm:flex sm:space-x-4 font-bold text-primary">
          {tabs.map((tab: any, index: number) => (
            <div className="" key={tab.id}>
              {tab.title}
            </div>
          ))}
        </div>

        <div
          className={`flex sm:hidden duration-700 flex-col transition-all  absolute bg-white  px-4 top-0 left-0 right-0 h-screen z-50 space-y-4 ${
            openNav ? "-ml-[5px]" : "ml-[600px] mx-4"
          }`}
        >
          <div className="flex items-center w-full justify-between mt-4">
            <RiseLogo color="#45b1b7" />
            <AiOutlineClose
              color="#45b1b7"
              className="flex"
              height={20}
              onClick={() => setOpenNav(false)}
            />
          </div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-4 text-[#45b1b7]  font-bold"
          >
            {tabs.map((tab: any, index: number) => (
              <motion.div className={` hover:text-black`} key={tab.id}>
                {tab.title}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
