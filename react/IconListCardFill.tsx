import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListCardFill = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M4 4C3.44772 4 3 4.44772 3 5V11C3 11.5523 3.44772 12 4 12H20C20.5523 12 21 11.5523 21 11V5C21 4.44772 20.5523 4 20 4H4Z"
          fill="currentColor"
        />
        <path
          d="M3.19995 15.5C3.19995 15.0582 3.55812 14.7 3.99995 14.7H20C20.4418 14.7 20.7999 15.0582 20.7999 15.5C20.7999 15.9418 20.4418 16.3 20 16.3H3.99995C3.55812 16.3 3.19995 15.9418 3.19995 15.5Z"
          fill="currentColor"
        />
        <path
          d="M3.99995 18.7C3.55812 18.7 3.19995 19.0582 3.19995 19.5C3.19995 19.9418 3.55812 20.3 3.99995 20.3H20C20.4418 20.3 20.7999 19.9418 20.7999 19.5C20.7999 19.0582 20.4418 18.7 20 18.7H3.99995Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListCardFill);
export default ForwardRef;
