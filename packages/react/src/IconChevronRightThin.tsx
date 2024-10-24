/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChevronRightThin = (
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
        d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChevronRightThin);
export default ForwardRef;
