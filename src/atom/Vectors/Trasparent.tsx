import * as React from "react"
import { SVGProps } from "react"

const Trasparent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="m38 22-7.997 8.015-4-4.013L18 34m20-12h-6m6 0v6"
      stroke="#40BBC3"
      strokeLinecap="square"
    />
  </svg>
)

export default Trasparent