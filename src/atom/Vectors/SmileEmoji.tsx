import * as React from "react"
import { SVGProps } from "react"

const SmileEmoji = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="M23 25.5a1.5 1.5 0 1 1 3 0m4 0a1.5 1.5 0 1 1 3 0M28 38c5.522 0 10-4.477 10-10 0-5.522-4.478-10-10-10-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10zm5-9a5 5 0 1 1-10 0h10z"
      stroke="#40BBC3"
      strokeLinecap="square"
    />
  </svg>
)

export default SmileEmoji