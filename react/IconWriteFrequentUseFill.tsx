import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconWriteFrequentUseFill = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.5.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V13C22 13.5523 21.5523 14 21 14C20.4477 14 20 13.5523 20 13V4C20 3.44772 19.5523 3 19 3H5C4.44772 3 4 3.44772 4 4V20C4 20.5523 4.44772 21 5 21H12.9C13.4523 21 13.9 21.4477 13.9 22C13.9 22.5523 13.4523 23 12.9 23H5C3.34315 23 2 21.6569 2 20V4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 7C7 6.44772 7.44772 6 8 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 11C7 10.4477 7.44772 10 8 10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H8C7.44772 12 7 11.5523 7 11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 15C7 14.4477 7.44772 14 8 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H8C7.44772 16 7 15.5523 7 15Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 19C14 18.4477 14.4477 18 15 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H15C14.4477 20 14 19.5523 14 19Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 23C17.4477 23 17 22.5523 17 22V16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V22C19 22.5523 18.5523 23 18 23Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconWriteFrequentUseFill);
export default ForwardRef;
