import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPriceWonFill = (
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
        d="M19.8361 5.05853C19.316 4.87278 18.7437 5.14383 18.558 5.66394L17.0093 10.0003H14.1064L12.9657 5.74154C12.8486 5.30431 12.4524 5.00027 11.9997 5.00027C11.5471 5.00027 11.1509 5.30431 11.0338 5.74154L9.89304 10.0003H6.99017L5.44147 5.66394C5.25572 5.14383 4.6835 4.87278 4.16339 5.05853C3.64328 5.24428 3.37223 5.8165 3.55799 6.33661L4.86645 10.0003H3.5C2.94772 10.0003 2.5 10.448 2.5 11.0003C2.5 11.5526 2.94772 12.0003 3.5 12.0003H5.58073L7.8437 18.3366C7.99087 18.7487 8.38887 19.0172 8.82609 18.9994C9.2633 18.9817 9.63818 18.6817 9.75139 18.259L11.4278 12.0003H12.5716L14.2481 18.259C14.3613 18.6817 14.7362 18.9817 15.1734 18.9994C15.6106 19.0172 16.0086 18.7487 16.1558 18.3366L18.4187 12.0003H20.5C21.0523 12.0003 21.5 11.5526 21.5 11.0003C21.5 10.448 21.0523 10.0003 20.5 10.0003H19.133L20.4415 6.33661C20.6272 5.8165 20.3562 5.24428 19.8361 5.05853ZM8.64895 14.6449L7.70446 12.0003H9.35733L8.64895 14.6449ZM15.3505 14.6449L14.6421 12.0003H16.295L15.3505 14.6449Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPriceWonFill);
export default ForwardRef;
