import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSellThin = (
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
      <g>
        <path
          d="M7.28308 11.434C6.97046 11.434 6.71704 11.6874 6.71704 12.0001C6.71704 12.3127 6.97046 12.5661 7.28308 12.5661H11.434V16.717C11.434 17.0297 11.6874 17.2831 12.0001 17.2831C12.3127 17.2831 12.5661 17.0297 12.5661 16.717V12.5661H16.717C17.0297 12.5661 17.2831 12.3127 17.2831 12.0001C17.2831 11.6874 17.0297 11.434 16.717 11.434H12.5661V7.28308C12.5661 6.97046 12.3127 6.71704 12.0001 6.71704C11.6874 6.71704 11.434 6.97046 11.434 7.28308V11.434H7.28308Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM7 3.2H17C19.0987 3.2 20.8 4.90132 20.8 7V17C20.8 19.0987 19.0987 20.8 17 20.8H7C4.90132 20.8 3.2 19.0987 3.2 17V7C3.2 4.90132 4.90132 3.2 7 3.2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSellThin);
export default ForwardRef;
