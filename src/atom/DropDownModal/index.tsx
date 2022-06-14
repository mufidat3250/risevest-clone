import React, { MouseEventHandler, ReactNode, useRef, useState } from 'react'
import './DropDownStyle.scss'
import { useClickAway} from 'react-use'

const DropDownModal = ({
    children,
    showModal,
    closeModal = () => {},
}:{ 
    children: ReactNode,
    showModal?: boolean,
    closeModal?: Function
}) => {

    let clickref = useRef(null)
    // const [modal, setModal] = useState(false)
    useClickAway(clickref, () => {
        closeModal(false)
    })
  return (
    <div  className={`DropDown ${showModal ? 'bg-white whitespace-nowrap z-50' : 'hidden'}`}
    onClick={() => closeModal(false)}
    > 
        <div ref={clickref}>
        {children}
        </div>
    </div>
  )
}

export default DropDownModal




// import React, { useEffect } from "react";
// import Logo from "./vectors/Logo";
// import Link from "next/link";
// import Button from "./Button";
// import { Router, useRouter } from "next/router";
// import { gsap } from "gsap";

// const Navbar = () => {
//   const centerNav = [
//     {
//       text: "Why Ridima?",
//       path: "/#whyRidima",
//     },
//     {
//       text: "Download",
//       path: "/download",
//     },
//     {
//       text: "About",
//       path: "/about",
//     },
//     {
//       text: "FAQs",
//       path: "/faq",
//     },
//     {
//       text: "Contact",
//       path: "/contact",
//     },
//     {
//       text: "Blog",
//       path: "/blog",
//     },
//   ];
//   useEffect(() => {
//     const desktopTl = gsap.timeline();
//     desktopTl
//       .fromTo(
//         ".desktopLogo",
//         {
//           xPercent: -100,
//           opacity: 0,
//           stagger: 0.1,
//         },
//         { opacity: 1, xPercent: 100 }
//       )
//       .fromTo(
//         ".links > a",
//         {
//           xPercent: -30,
//           opacity: 0,
//           stagger: 0.1,
//         },
//         { opacity: 1, xPercent: 30 }
//       )
//       .fromTo(
//         ".nav-cta",
//         { opacity: 0, x: 40, stagger: 0.1 },
//         { opacity: 1, x: 0 }
//       );
//   }, []);

//   const router = useRouter();
//   return (
//     <nav>
//       <Link href="/">
//         <a className="desktopLogo">
//           <Logo />
//         </a>
//       </Link>
//       <div className="flex-grow" />
//       <div className="links">
//         {centerNav.map((navItem, navIndex) => (
//           <Link href={navItem.path} key={navIndex} className="link">
//             <a
//               className={
//                 navItem.path == router.pathname
//                   ? "text-deepPurple"
//                   : "text-rBlue"
//               }
//             >
//               {navItem.text}
//             </a>
//           </Link>
//         ))}
//       </div>
//       <div className="flex-grow-[3]" />
//       <div className="w-[9.0625rem] nav-cta">
//         <Button label="Get started" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;