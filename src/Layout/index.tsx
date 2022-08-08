import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../atom/Vectors/Logo";
import "./LandingPage.scss";
import HandBugger from "../atom/Vectors/HandBugger"
import RiseLogo from "../atom/Vectors/RiseLogo";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeInUp } from "../variant";
import Nav from "../atom/NavTabs";
// import 'reactjs-freshchat/dist/index.css'

// @ts-ignore
import FreshChat from "react-freshchat";

type props = {
  children: React.ReactNode;
  bgColor?: string;
};
const tabs = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Products",
    url: "",
    id: 2,
  },
  {
    title: "Invesment Club",
    url: "",
    id: 3,
  },

  {
    title: " About Us",
    url: "",
    id: 4,
  },
  {
    title: "FAQs",
    url: "",
    id: 5,
  },
  {
    title: "Blog",
    url: "",
    id: 6,
  },
];
const Landingpage = ({ children, bgColor }: props) => {
  const [currentpath] = useState(window.location.pathname);

  const [Active, setActive] = useState("");
  let isActive: boolean;
  console.log(currentpath);
  const navigate = useNavigate();
  const [product, setProduct] = useState(false);

  console.log(Active);
  console.log({ navigate });

  const handleTabClick = (title: string, url: string) => {
    setActiveTab("top");
    if (title === "Products") {
      setProduct(true);
    } else {
      navigate(url);
    }
    setTimeout(() => {
      setActiveTab("bottom");
    }, 1000);
  };
  return (
    <div className="flex flex-col largescreen  h-screen overflow-y-auto overflow-x-hidden  relative">
      <div className="" style={{ backgroundColor: bgColor }}>
        <Nav tabs={tabs} />
      </div>

      <main className="overflow-auto">{children}</main>
      <div className="">
        <FreshChat
          token={"c9047c67-d145-4875-a9b1-26d5d54ab186"}
          host={"https://wchat.freshchat.com"}
          email="user@email.com"
          config={{
            headerProperty: {
              backgroundColor: "#16434d",
              foregroundColor: "#ffffff",
            },
          }}
          externalId={"john.doe1987"} // user’s id unique to your system
          first_name="..."
          onInit={(widget: {
            open: () => any;
            user: { get: () => any };
            on: (
              arg0: string,
              arg1: (resp: { status: any; data: any }) => void
            ) => any;
          }) => {
            console.log(888, widget.open());
            console.log(111, widget.user.get());
            console.log(
              333,
              widget.on(
                "user:created",
                function (resp: { status: any; data: any }) {
                  console.log(11, resp);
                  var status = resp && resp.status,
                    data = resp && resp.data;
                }
              )
            );
          }}
          onHide={(widget: any) => {
            console.log(11, widget);
          }}
        />
      </div>
    </div>
  );
};

export default Landingpage;
function setActiveTab(arg0: string) {
  throw new Error("Function not implemented.");
}


