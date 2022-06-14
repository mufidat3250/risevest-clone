import * as React from "react"
import { SVGProps } from "react"

const Crown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      clipRule="evenodd"
      d="m24 28-6-4 2 12h16l2-12-6 4-4-8-4 8z"
      stroke="#40BBC3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Crown
