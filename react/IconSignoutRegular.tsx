import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSignoutRegular = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7468 7.49681C16.0592 7.18439 16.5658 7.18439 16.8782 7.49681L20.8157 11.4343C21.1281 11.7467 21.1281 12.2533 20.8157 12.5657L16.8782 16.5032C16.5658 16.8156 16.0592 16.8156 15.7468 16.5032C15.4344 16.1908 15.4344 15.6842 15.7468 15.3718L19.1186 12L15.7468 8.62819C15.4344 8.31577 15.4344 7.80923 15.7468 7.49681Z"
          fill="currentColor"
        />
        <path
          d="M9.99995 4.8002H4.79995V19.2002H9.99995C10.4418 19.2002 10.8 19.5584 10.8 20.0002C10.8 20.442 10.4418 20.8002 9.99995 20.8002H4.74995C4.34667 20.8002 3.95514 20.6451 3.6627 20.3615C3.36943 20.0771 3.19995 19.6861 3.19995 19.2729V4.72747C3.19995 4.31433 3.36943 3.92328 3.6627 3.63889C3.95514 3.35531 4.34667 3.2002 4.74995 3.2002H9.99995C10.4418 3.2002 10.8 3.55837 10.8 4.0002C10.8 4.44202 10.4418 4.8002 9.99995 4.8002Z"
          fill="currentColor"
        />
        <path
          d="M8.74995 11.2002C8.30812 11.2002 7.94995 11.5584 7.94995 12.0002C7.94995 12.442 8.30812 12.8002 8.74995 12.8002H20.25C20.6918 12.8002 21.05 12.442 21.05 12.0002C21.05 11.5584 20.6918 11.2002 20.25 11.2002H8.74995Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSignoutRegular);
export default ForwardRef;
