import * as React from "react"
import { SVGProps } from "react"

const ArrowRightUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
    width="1.0625rem"
    height="1.0625rem"
    viewBox="0 0 17 17"
    fill="none"
    className="translate-y-0.5 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-translate duration-300"
    {...props}
  >
    <path
      d="M4.07 12.556a.5.5 0 0 0 .708 0l7.053-7.053-.128 5.273a.5.5 0 0 0 1 .025l.146-6.023a1 1 0 0 0-1.012-1l-6.01.147a.5.5 0 0 0 .024 1l5.284-.14-7.064 7.064a.5.5 0 0 0 0 .707z"
      fill="currentColor"
    />
  </svg>
)

export default ArrowRightUp
