/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarFill = (
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
        d="M21.01 11.74C20.74 11.55 20.46 11.37 20.16 11.2L19.95 10.03H21C21.55 10.03 22 9.58 22 9.03C22 8.48 21.55 8.03 21 8.03H19.6L19.13 5.39C19.01 4.68 18.5 4.1 17.82 3.88C16.1 3.32 14.12 3 12 3C9.88 3 7.9 3.32 6.18 3.88C5.5 4.1 5 4.69 4.87 5.39L4.4 8.03H3C2.45 8.03 2 8.48 2 9.03C2 9.58 2.45 10.03 3 10.03H4.05L3.84 11.2C3.54 11.37 3.25 11.55 2.98 11.74C2.45 12.12 2.14 12.73 2.14 13.38V20.53C2.14 20.81 2.36 21.03 2.64 21.03H6.66C6.94 21.03 7.16 20.81 7.16 20.53V19.12H16.85V20.53C16.85 20.81 17.07 21.03 17.35 21.03H21.35C21.63 21.03 21.85 20.81 21.85 20.53V13.38C21.85 12.73 21.54 12.12 21.01 11.74ZM7.61 15.95C6.86 15.95 6.26 15.35 6.26 14.6C6.26 13.85 6.86 13.25 7.61 13.25C8.36 13.25 8.96 13.85 8.96 14.6C8.96 15.35 8.36 15.95 7.61 15.95ZM16.41 15.95C15.66 15.95 15.06 15.35 15.06 14.6C15.06 13.85 15.66 13.25 16.41 13.25C17.16 13.25 17.76 13.85 17.76 14.6C17.76 15.35 17.16 15.95 16.41 15.95ZM12.01 9.27C9.83 9.27 7.8 9.62 6.06 10.22L6.85 5.77C8.42 5.26 10.2 5 12.02 5C13.84 5 15.62 5.27 17.19 5.77L17.98 10.23C16.24 9.63 14.21 9.28 12.02 9.28L12.01 9.27Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarFill);
export default ForwardRef;
