/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconClockFill = (
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
    data-seed-icon-version="0.7.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12.898 7.51026C12.898 7.01433 12.4959 6.6123 12 6.6123C11.5041 6.6123 11.1021 7.01433 11.1021 7.51026V12.0001C11.1021 12.3003 11.2521 12.5807 11.5019 12.7472L14.8693 14.9921C15.2819 15.2672 15.8394 15.1557 16.1145 14.7431C16.3896 14.3304 16.2781 13.7729 15.8655 13.4978L12.898 11.5195V7.51026Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconClockFill);
export default ForwardRef;
