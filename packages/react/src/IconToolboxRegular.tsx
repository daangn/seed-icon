/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconToolboxRegular = (
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
          d="M5.8695 5.98649C6.13818 5.78747 6.4637 5.68004 6.79806 5.68004H17.202C17.5364 5.68004 17.8619 5.78747 18.1306 5.98649L21.3286 8.35539C21.7258 8.64961 21.96 9.11465 21.96 9.60894V19.24C21.96 21.0957 20.4557 22.6 18.6 22.6H5.40004C3.54436 22.6 2.04004 21.0957 2.04004 19.24V9.60894C2.04004 9.11465 2.2743 8.64961 2.67148 8.35539L5.8695 5.98649ZM6.91687 7.60004L3.96004 9.79028V19.24C3.96004 20.0353 4.60475 20.68 5.40004 20.68H18.6C19.3953 20.68 20.04 20.0353 20.04 19.24V9.79028L17.0832 7.60004H6.91687Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.36004 4.96004V7.00004H7.44004V4.60004C7.44004 3.73847 8.13847 3.04004 9.00004 3.04004H15C15.8616 3.04004 16.56 3.73847 16.56 4.60004V7.00004H14.64V4.96004H9.36004Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 13.84H3.00004V11.92H21V13.84Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.40027 10.48C8.93047 10.48 9.36027 10.9098 9.36027 11.44V14.08C9.36027 14.6102 8.93047 15.04 8.40027 15.04C7.87008 15.04 7.44027 14.6102 7.44027 14.08V11.44C7.44027 10.9098 7.87008 10.48 8.40027 10.48Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6003 10.48C16.1305 10.48 16.5603 10.9098 16.5603 11.44V14.08C16.5603 14.6102 16.1305 15.04 15.6003 15.04C15.0701 15.04 14.6403 14.6102 14.6403 14.08V11.44C14.6403 10.9098 15.0701 10.48 15.6003 10.48Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconToolboxRegular);
export default ForwardRef;
