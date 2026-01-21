import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M224,128a96,96,0,1,1-96-96,96,96,0,0,1,96,96Z" opacity="0.2" />
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
        <path d="M168,100a40,40,0,0,0-76.42,15.09,24,24,0,1,0,0,25.82A40,40,0,1,0,168,100Zm-40,56a24,24,0,0,0,0-48Zm40-24a24,24,0,0,0-24-24,8.13,8.13,0,0,1-4-1.07,39.81,39.81,0,0,0,0,50.14,8.13,8.13,0,0,1,4-1.07A24,24,0,0,0,168,132Z" />
      </g>
    </svg>
  );
}
