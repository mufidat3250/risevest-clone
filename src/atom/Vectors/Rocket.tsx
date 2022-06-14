import * as React from "react"
import { SVGProps } from "react"

const Rocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="m26 30-6 6m8.497-2.555.649 4.557 2.801-2.257v-6.502a.865.865 0 0 1 .25-.614l3.52-3.52A7.731 7.731 0 0 0 38 19.61v-1.608h-1.608a7.731 7.731 0 0 0-5.5 2.283l-3.519 3.52a.865.865 0 0 1-.614.25h-6.502L18 26.874l4.557.648 5.94 5.923z"
      stroke="#40BBC3"
      strokeLinecap="square"
    />
  </svg>
)

export default Rocket
