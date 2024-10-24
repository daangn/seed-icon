/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPauseThin = (
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
          d="M3.80005 4.9999C3.80005 4.11625 4.51639 3.3999 5.40005 3.3999H8.40005C9.2837 3.3999 10 4.11625 10 4.9999V18.9999C10 19.8836 9.2837 20.5999 8.40005 20.5999H5.40005C4.51639 20.5999 3.80005 19.8836 3.80005 18.9999V4.9999ZM5.40005 4.5999C5.17913 4.5999 5.00005 4.77899 5.00005 4.9999V18.9999C5.00005 19.2208 5.17913 19.3999 5.40005 19.3999H8.40005C8.62096 19.3999 8.80005 19.2208 8.80005 18.9999V4.9999C8.80005 4.77899 8.62096 4.5999 8.40005 4.5999H5.40005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 4.9999C14 4.11625 14.7164 3.3999 15.6 3.3999H18.6C19.4837 3.3999 20.2 4.11625 20.2 4.9999V18.9999C20.2 19.8836 19.4837 20.5999 18.6 20.5999H15.6C14.7164 20.5999 14 19.8836 14 18.9999V4.9999ZM15.6 4.5999C15.3791 4.5999 15.2 4.77899 15.2 4.9999V18.9999C15.2 19.2208 15.3791 19.3999 15.6 19.3999H18.6C18.821 19.3999 19 19.2208 19 18.9999V4.9999C19 4.77899 18.821 4.5999 18.6 4.5999H15.6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPauseThin);
export default ForwardRef;
