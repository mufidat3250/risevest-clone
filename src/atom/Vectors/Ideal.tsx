import * as React from "react"
import { SVGProps } from "react"

const Ideal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="M29.833 25.4h-2.749c-.709 0-1.284.583-1.284 1.3 0 .717.575 1.299 1.284 1.299h1.834c.708 0 1.282.582 1.282 1.3 0 .718-.574 1.301-1.282 1.301H25.8M18 34.124V22.47S19.333 21 23.333 21s5.066 2.1 9.333 2.1A20.15 20.15 0 0 0 38 22.225v11.899S36.533 35 33.333 35c-3.2 0-5.732-2.1-9.333-2.1a14.32 14.32 0 0 0-6 1.224zM27.982 24v8-8z"
      stroke="#40BBC3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Ideal

