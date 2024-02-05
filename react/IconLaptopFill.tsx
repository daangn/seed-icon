import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLaptopFill = (
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
        d="M21 18V19H4V18V7C4 6.44772 4.44772 6 5 6H20C20.5523 6 21 6.44772 21 7V18ZM10.05 14.9926C9.22157 14.9926 8.55 15.6641 8.55 16.4926C8.55 17.321 9.22157 17.9926 10.05 17.9926H14.75C15.5784 17.9926 16.25 17.321 16.25 16.4926C16.25 15.6641 15.5784 14.9926 14.75 14.9926H10.05Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLaptopFill);
export default ForwardRef;
