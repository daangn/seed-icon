import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRetryRegular = (
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
        d="M4.47012 12C4.47012 8.0235 7.69367 4.79995 11.6701 4.79995C15.6466 4.79995 18.8701 8.0235 18.8701 12C18.8701 12.2871 18.8534 12.5699 18.8208 12.8477L17.2358 11.2627C16.9234 10.9503 16.4168 10.9503 16.1044 11.2627C15.792 11.5751 15.792 12.0817 16.1044 12.3941L18.9328 15.2225C19.2453 15.5349 19.7518 15.5349 20.0642 15.2225L22.8926 12.3941C23.2051 12.0817 23.2051 11.5751 22.8926 11.2627C22.5802 10.9503 22.0737 10.9503 21.7613 11.2627L20.4518 12.5722C20.4639 12.3829 20.4701 12.1921 20.4701 12C20.4701 7.13985 16.5302 3.19995 11.6701 3.19995C6.81001 3.19995 2.87012 7.13985 2.87012 12C2.87012 16.8601 6.81001 20.7999 11.6701 20.7999C13.2156 20.7999 14.6703 20.4008 15.9343 19.6995C16.3206 19.4851 16.46 18.9981 16.2456 18.6118C16.0313 18.2255 15.5443 18.0861 15.158 18.3004C14.1254 18.8734 12.9371 19.2 11.6701 19.2C7.69367 19.2 4.47012 15.9764 4.47012 12Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRetryRegular);
export default ForwardRef;
