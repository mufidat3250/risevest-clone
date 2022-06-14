import * as React from "react"
import { SVGProps } from "react"

const Dollarsign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="M31.945 24A4 4 0 0 0 28 20.667c-2.209 0-4 1.457-4 3.667s2 3.21 4 3.667c2 .451 4 1.458 4 3.667 0 2.209-1.791 3.667-4 3.667a4 4 0 0 1-2.828-1.172M28 18v2.623m0 14.714V38"
      stroke="#40BBC3"
      strokeLinecap="square"
    />
  </svg>
)

export default Dollarsign
