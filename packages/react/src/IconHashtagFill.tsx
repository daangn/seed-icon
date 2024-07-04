/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHashtagFill = (
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
        d="M10.9864 3.16456C11.0772 2.61978 10.7092 2.10456 10.1644 2.01376C9.61966 1.92297 9.10443 2.29099 9.01364 2.83576L8.31957 7.00015H4C3.44772 7.00015 3 7.44787 3 8.00015C3 8.55244 3.44772 9.00015 4 9.00015H7.98624L7.15291 14.0002H3C2.44772 14.0002 2 14.4479 2 15.0002C2 15.5524 2.44772 16.0002 3 16.0002H6.81957L6.01364 20.8358C5.92285 21.3805 6.29086 21.8958 6.83564 21.9865C7.38041 22.0773 7.89563 21.7093 7.98643 21.1646L8.84716 16.0002H13.8196L13.0136 20.8358C12.9228 21.3805 13.2909 21.8958 13.8356 21.9865C14.3804 22.0773 14.8956 21.7093 14.9864 21.1646L15.8472 16.0002H20C20.5523 16.0002 21 15.5524 21 15.0002C21 14.4479 20.5523 14.0002 20 14.0002H16.1805L17.0138 9.00015H21C21.5523 9.00015 22 8.55244 22 8.00015C22 7.44787 21.5523 7.00015 21 7.00015H17.3472L17.9864 3.16456C18.0772 2.61978 17.7092 2.10456 17.1644 2.01376C16.6197 1.92297 16.1044 2.29099 16.0136 2.83576L15.3196 7.00015H10.3472L10.9864 3.16456ZM14.1529 14.0002L14.9862 9.00015H10.0138L9.18049 14.0002H14.1529Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHashtagFill);
export default ForwardRef;
