import * as React from "react"
import { SVGProps } from "react"

const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="M18 28h20M28 18c5.523 0 10 4.477 10 10s-4.477 10-10 10a15.3 15.3 0 0 0 4-10 15.3 15.3 0 0 0-4-10zm0 0a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10l-.28-.004C22.327 37.848 18 33.43 18 28c0-5.523 4.477-10 10-10z"
      stroke="#40BBC3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Globe
