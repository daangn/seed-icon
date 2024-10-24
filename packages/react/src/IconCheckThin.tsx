/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCheckThin = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2041 4.14115C21.525 4.38078 21.5959 4.84215 21.3626 5.17165L10.7851 19.6962C10.6581 19.8756 10.4591 19.9868 10.2433 19.9989C10.0276 20.011 9.81804 19.9227 9.6727 19.7585L2.68681 11.9963C2.41995 11.6948 2.44158 11.2282 2.73513 10.9542C3.02867 10.6801 3.48296 10.7023 3.74982 11.0038L10.1422 18.0956L20.2007 4.30386C20.4341 3.97436 20.8833 3.90151 21.2041 4.14115Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCheckThin);
export default ForwardRef;
