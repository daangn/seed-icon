import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoreVertThin = (
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
          d="M11.9 6.8C11.405 6.8 11 6.395 11 5.9C11 5.405 11.405 5 11.9 5C12.395 5 12.8 5.405 12.8 5.9C12.8 6.395 12.395 6.8 11.9 6.8Z"
          fill="currentColor"
        />
        <path
          d="M11.9 12.9001C11.405 12.9001 11 12.4951 11 12.0001C11 11.5051 11.405 11.1001 11.9 11.1001C12.395 11.1001 12.8 11.5051 12.8 12.0001C12.8 12.4951 12.395 12.9001 11.9 12.9001Z"
          fill="currentColor"
        />
        <path
          d="M11 18.1002C11 18.5952 11.405 19.0002 11.9 19.0002C12.395 19.0002 12.8 18.5952 12.8 18.1002C12.8 17.6052 12.395 17.2002 11.9 17.2002C11.405 17.2002 11 17.6052 11 18.1002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoreVertThin);
export default ForwardRef;
