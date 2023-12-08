import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReservationRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M16.5 11.6564C16.7515 11.2932 16.6609 10.7948 16.2976 10.5433C15.9343 10.2918 15.436 10.3824 15.1845 10.7457L11.2748 16.3931L8.94965 13.6804C8.66211 13.345 8.15707 13.3061 7.82161 13.5937C7.48615 13.8812 7.4473 14.3862 7.73484 14.7217L10.7348 18.2217C10.8962 18.41 11.1358 18.5128 11.3835 18.5C11.6311 18.4872 11.8588 18.3603 12 18.1564L16.5 11.6564Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.3 1.8667C8.74183 1.8667 9.1 2.22487 9.1 2.6667V3.20007H14.9V2.6667C14.9 2.22487 15.2582 1.8667 15.7 1.8667C16.1418 1.8667 16.5 2.22487 16.5 2.6667V3.20007H21.2C21.6418 3.20007 22 3.55825 22 4.00007V7.9983L22 8.00007L22 8.00183L22 19.2C22 20.7464 20.7464 22 19.2001 22H4.80005C3.25365 22 2.00005 20.7464 2.00005 19.2L2 4.00007C2 3.55825 2.35817 3.20007 2.8 3.20007H7.5V2.6667C7.5 2.22487 7.85817 1.8667 8.3 1.8667ZM7.5 5.33337V4.80007H3.6V7.20007L20.4 7.20007V4.80007H16.5V5.33337C16.5 5.77519 16.1418 6.13337 15.7 6.13337C15.2582 6.13337 14.9 5.77519 14.9 5.33337V4.80007H9.1V5.33337C9.1 5.77519 8.74183 6.13337 8.3 6.13337C7.85817 6.13337 7.5 5.77519 7.5 5.33337ZM3.60005 19.2L3.6 8.80007L20.4 8.80007L20.4001 19.2C20.4001 19.8627 19.8628 20.4 19.2001 20.4H4.80005C4.13731 20.4 3.60005 19.8627 3.60005 19.2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReservationRegular);
export default ForwardRef;
