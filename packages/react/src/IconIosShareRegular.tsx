/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconIosShareRegular = (
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
    data-seed-icon-version="0.7.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M11.434 2.43427C11.7464 2.12185 12.253 2.12185 12.5654 2.43427L16.5654 6.43427C16.8778 6.74669 16.8778 7.25322 16.5654 7.56564C16.253 7.87806 15.7464 7.87806 15.434 7.56564L12.7997 4.93132V14C12.7997 14.4418 12.4415 14.8 11.9997 14.8C11.5579 14.8 11.1997 14.4418 11.1997 14V4.93132L8.56539 7.56564C8.25297 7.87806 7.74644 7.87806 7.43402 7.56564C7.1216 7.25322 7.1216 6.74669 7.43402 6.43427L11.434 2.43427Z"
          fill="currentColor"
        />
        <path
          d="M4.99971 10.8C4.89153 10.8 4.79971 10.8918 4.79971 11V20C4.79971 20.1081 4.89153 20.2 4.99971 20.2H18.9997C19.1079 20.2 19.1997 20.1081 19.1997 20V11C19.1997 10.8918 19.1079 10.8 18.9997 10.8H15.9997C15.5579 10.8 15.1997 10.4418 15.1997 9.99995C15.1997 9.55812 15.5579 9.19995 15.9997 9.19995H18.9997C19.9915 9.19995 20.7997 10.0081 20.7997 11V20C20.7997 20.9918 19.9915 21.7999 18.9997 21.7999H4.99971C4.00788 21.7999 3.19971 20.9918 3.19971 20V11C3.19971 10.0081 4.00788 9.19995 4.99971 9.19995H7.99971C8.44153 9.19995 8.79971 9.55812 8.79971 9.99995C8.79971 10.4418 8.44153 10.8 7.99971 10.8H4.99971Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconIosShareRegular);
export default ForwardRef;
