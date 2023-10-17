import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size?: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.11"
    width="100%"
    height="100%"
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.92324 2.19995C1.59187 2.19995 1.32324 2.46858 1.32324 2.79995C1.32324 3.13132 1.59187 3.39995 1.92324 3.39995H3.75832L4.3296 5.93894L6.24571 15.0254C6.40179 15.7656 7.05486 16.2953 7.81128 16.2953H18.9432C19.7104 16.2953 20.3696 15.7508 20.5145 14.9974L22.0303 7.11328C22.2201 6.12653 21.4639 5.21118 20.4591 5.21118H5.39585L4.80612 2.59019C4.75479 2.36204 4.55217 2.19995 4.31832 2.19995H1.92324ZM7.41989 14.7778L5.65557 6.41118H20.4591C20.7103 6.41118 20.8994 6.64002 20.8519 6.8867L19.336 14.7708C19.2998 14.9592 19.135 15.0953 18.9432 15.0953H7.81128C7.62218 15.0953 7.45891 14.9629 7.41989 14.7778Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.59971 17.6001C7.27422 17.6001 6.19971 18.6746 6.19971 20.0001C6.19971 21.3256 7.27422 22.4001 8.59971 22.4001C9.92519 22.4001 10.9997 21.3256 10.9997 20.0001C10.9997 18.6746 9.92519 17.6001 8.59971 17.6001ZM7.39971 20.0001C7.39971 19.3374 7.93696 18.8001 8.59971 18.8001C9.26245 18.8001 9.79971 19.3374 9.79971 20.0001C9.79971 20.6628 9.26245 21.2001 8.59971 21.2001C7.93696 21.2001 7.39971 20.6628 7.39971 20.0001Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 20.0002C16 18.6747 17.0745 17.6002 18.4 17.6002C19.7255 17.6002 20.8 18.6747 20.8 20.0002C20.8 21.3257 19.7255 22.4002 18.4 22.4002C17.0745 22.4002 16 21.3257 16 20.0002ZM17.2 20.0002C17.2 19.3375 17.7373 18.8002 18.4 18.8002C19.0627 18.8002 19.6 19.3375 19.6 20.0002C19.6 20.663 19.0627 21.2002 18.4 21.2002C17.7373 21.2002 17.2 20.663 17.2 20.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconCartThin = (
  { size = 24, className }: Props,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
      }}
    >
      <SVG />
    </span>
  );
};
export default React.forwardRef(IconCartThin);
