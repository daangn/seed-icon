/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconExpandFill = (
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
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M21.9241 2.61722C21.8757 2.50014 21.8041 2.3904 21.7092 2.29502C21.7078 2.2936 21.7064 2.29219 21.705 2.29078C21.5242 2.11106 21.2751 2 21 2H15C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4H18.5858L13.7929 8.79289C13.4024 9.18342 13.4024 9.81658 13.7929 10.2071C14.1834 10.5976 14.8166 10.5976 15.2071 10.2071L20 5.41421V9C20 9.55228 20.4477 10 21 10C21.5523 10 22 9.55228 22 9V3.00069C22 2.99969 22 2.998 22 2.997C21.9996 2.8625 21.9727 2.73425 21.9241 2.61722Z"
          fill="currentColor"
        />
        <path
          d="M10.2071 15.2071C10.5976 14.8166 10.5976 14.1834 10.2071 13.7929C9.81658 13.4024 9.18342 13.4024 8.79289 13.7929L4 18.5858V15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V20.9998C2 21.1354 2.02699 21.2649 2.07588 21.3828C2.12432 21.4999 2.19595 21.6096 2.29078 21.705C2.29219 21.7064 2.2936 21.7078 2.29502 21.7092C2.48924 21.9023 2.74301 21.9992 2.997 22C2.998 22 2.999 22 3 22H9C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20H5.41421L10.2071 15.2071Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconExpandFill);
export default ForwardRef;
