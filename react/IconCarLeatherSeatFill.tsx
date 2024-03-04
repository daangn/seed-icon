import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarLeatherSeatFill = (
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
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.27 2.28181C17.35 1.77181 15.38 2.91181 14.86 4.83181L12.27 14.4818C12.24 14.5818 12.16 14.6418 12.06 14.6418H5.65005C3.66005 14.6418 2.05005 16.2518 2.05005 18.2418C2.05005 20.2318 3.66005 21.8418 5.65005 21.8418H16.27C17.16 21.8418 17.9401 21.2418 18.17 20.3818L21.82 6.69181C22.33 4.77181 21.19 2.80181 19.27 2.28181Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarLeatherSeatFill);
export default ForwardRef;
