import * as React from "react"
import { SVGProps } from "react"

const Cloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={28} cy={28} r={27.5} fill="#fff" stroke="#40BBC3" />
    <path
      d="M21.004 30.918A5.007 5.007 0 0 1 18 26.333c0-2.757 2.242-5 5-5h.376C24.08 19.382 26.065 18 28.237 18a5.006 5.006 0 0 1 4.995 4.762h.482A4.29 4.29 0 0 1 38 27.048a4.293 4.293 0 0 1-3.002 4.089M24 38h8v-6h-8v6zm1.591-6v-1.592a2.409 2.409 0 0 1 4.816 0V32h-4.816z"
      stroke="#40BBC3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Cloud