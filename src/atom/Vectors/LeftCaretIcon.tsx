import { SVGProps } from "react";

const LeftCaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m8 12 6-6v12z" />
  </svg>
);

export default LeftCaretIcon;
