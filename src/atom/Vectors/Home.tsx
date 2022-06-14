import React from 'react'
import { SVGProps } from "react"

const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="M25 38v-8h6v8m-3-20 10 7h-1.071v13H19.111V25H18l10-7z"
      stroke="#40BBC3"
      strokeLinecap="square"
    />
  </svg>
)

export default Home