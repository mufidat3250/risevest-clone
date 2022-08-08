import * as React from "react";
import { SVGProps } from "react";

const RightCaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16 12-6 6V6z" />
  </svg>
);

export default RightCaretIcon;
