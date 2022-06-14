import * as React from "react"
import { SVGProps } from "react"

const DownLoad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="M26 26h-2m12 12H20V18h9c1.66 0 3 1.34 3 3v1h1c1.66 0 3 1.34 3 3v13zm-4-8h-8 8zm0 4h-8 8z"
      stroke="#40BBC3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DownLoad