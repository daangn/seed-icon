/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHandleRegular = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.19995 8.0002C3.19995 7.55837 3.55812 7.2002 3.99995 7.2002H20C20.4418 7.2002 20.7999 7.55837 20.7999 8.0002C20.7999 8.44202 20.4418 8.8002 20 8.8002H3.99995C3.55812 8.8002 3.19995 8.44202 3.19995 8.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.19995 12.0002C3.19995 11.5584 3.55812 11.2002 3.99995 11.2002H20C20.4418 11.2002 20.7999 11.5584 20.7999 12.0002C20.7999 12.442 20.4418 12.8002 20 12.8002H3.99995C3.55812 12.8002 3.19995 12.442 3.19995 12.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.19995 16.0002C3.19995 15.5584 3.55812 15.2002 3.99995 15.2002H20C20.4418 15.2002 20.7999 15.5584 20.7999 16.0002C20.7999 16.442 20.4418 16.8002 20 16.8002H3.99995C3.55812 16.8002 3.19995 16.442 3.19995 16.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHandleRegular);
export default ForwardRef;
