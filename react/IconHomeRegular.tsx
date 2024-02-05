import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHomeRegular = (
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
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4577 2.20608C11.767 1.93115 12.2331 1.93115 12.5424 2.20608L21.7261 10.3694C21.9004 10.5243 22.0001 10.7463 22.0001 10.9795V21.1836C22.0001 21.6345 21.6346 22 21.1838 22H15.0613C14.6104 22 14.245 21.6345 14.245 21.1836V16.0816C14.245 14.7977 13.2839 13.8367 12.0001 13.8367C10.7162 13.8367 9.75514 14.7977 9.75514 16.0816V21.1836C9.75514 21.6344 9.38966 22 8.93881 22H2.81633C2.36548 22 2 21.6345 2 21.1836V10.9795C2 10.7463 2.09971 10.5243 2.27399 10.3694L11.4577 2.20608ZM8.12248 20.3669V16.0816C8.12248 13.896 9.8145 12.204 12.0001 12.204C14.1856 12.204 15.8776 13.896 15.8776 16.0816V20.3673H20.3674V11.3461L12.0001 3.90842L3.63266 11.3461V20.3673L8.12248 20.3669Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHomeRegular);
export default ForwardRef;
