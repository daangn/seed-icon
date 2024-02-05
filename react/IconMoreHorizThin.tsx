import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoreHorizThin = (
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
        d="M7.8 11.9C7.8 12.395 7.395 12.8 6.9 12.8C6.405 12.8 6 12.395 6 11.9C6 11.405 6.405 11 6.9 11C7.395 11 7.8 11.405 7.8 11.9ZM12.9001 11.9C12.9001 12.395 12.4951 12.8 12.0001 12.8C11.5051 12.8 11.1001 12.395 11.1001 11.9C11.1001 11.405 11.5051 11 12.0001 11C12.4951 11 12.9001 11.405 12.9001 11.9ZM17.1 12.8C17.595 12.8 18 12.395 18 11.9C18 11.405 17.595 11 17.1 11C16.605 11 16.2 11.405 16.2 11.9C16.2 12.395 16.605 12.8 17.1 12.8Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoreHorizThin);
export default ForwardRef;
