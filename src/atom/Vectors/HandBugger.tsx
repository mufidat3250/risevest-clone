import * as React from "react"
import { SVGProps } from "react"

const HandBugger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // className="jsx-3242508275"
    {...props}
  >
    <path
      d="M11 6h9M3 12h17.5M3 18h8"
      stroke="currentColor"
      strokeWidth={2}
    //   className="jsx-3242508275"
    />
  </svg>
)

export default HandBugger