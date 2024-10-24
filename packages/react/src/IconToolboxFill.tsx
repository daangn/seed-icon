/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconToolboxFill = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3199 6.1333V4.59979C16.3199 3.87077 15.7289 3.27979 14.9999 3.27979H8.99993C8.27092 3.27979 7.67993 3.87077 7.67993 4.59979V6.1333H6.79802C6.66942 6.1333 6.54422 6.17462 6.44088 6.25117L3.24286 8.62007C3.0901 8.73323 3 8.91209 3 9.1022V12.4H7.67988V11.92C7.67988 11.5223 8.00224 11.2 8.39988 11.2C8.79753 11.2 9.11988 11.5223 9.11988 11.92V12.4H14.8799V11.92C14.8799 11.5223 15.2022 11.2 15.5999 11.2C15.9975 11.2 16.3199 11.5223 16.3199 11.92V12.4H21V9.1022C21 8.91209 20.9099 8.73323 20.7571 8.62007L17.5591 6.25117C17.4558 6.17462 17.3306 6.1333 17.202 6.1333H16.3199ZM9.11993 4.71979V6.1333H14.8799V4.71979H9.11993Z"
          fill="currentColor"
        />
        <path
          d="M21 19C21 20.3255 19.9255 21.4 18.6 21.4H5.4C4.07452 21.4 3 20.3255 3 19V13.84H7.67988V14.08C7.67988 14.4776 8.00224 14.8 8.39988 14.8C8.79753 14.8 9.11988 14.4776 9.11988 14.08V13.84H14.8799V14.08C14.8799 14.4776 15.2022 14.8 15.5999 14.8C15.9975 14.8 16.3199 14.4776 16.3199 14.08V13.84H21V19Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconToolboxFill);
export default ForwardRef;
