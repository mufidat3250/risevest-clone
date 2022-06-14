import * as React from "react"
import { SVGProps } from "react"

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={16}
    height={16}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m13 16.172 5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
      fill="rgba(8,152,160,1)"
    />
  </svg>
)

export default ArrowDown