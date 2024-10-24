/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLaptopThin = (
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
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00015 18.4H2.00015C1.66878 18.4 1.40015 18.6686 1.40015 19C1.40015 19.3314 1.66878 19.6 2.00015 19.6H22.8956C23.227 19.6 23.4956 19.3314 23.4956 19C23.4956 18.6686 23.227 18.4 22.8956 18.4H22.0001V7C22.0001 5.89543 21.1047 5 20.0001 5H5.00015C3.89558 5 3.00015 5.89543 3.00015 7V18.4ZM20.0001 6.2H5.00015C4.55832 6.2 4.20015 6.55817 4.20015 7V14.4028H20.8001V7C20.8001 6.55817 20.442 6.2 20.0001 6.2ZM9.55229 16.4924C9.55229 16.2163 9.77615 15.9924 10.0523 15.9924H14.7538C15.0299 15.9924 15.2538 16.2163 15.2538 16.4924C15.2538 16.7686 15.0299 16.9924 14.7538 16.9924H10.0523C9.77615 16.9924 9.55229 16.7686 9.55229 16.4924Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLaptopThin);
export default ForwardRef;
