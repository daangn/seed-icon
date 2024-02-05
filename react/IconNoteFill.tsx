import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNoteFill = (
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
        d="M4.99995 2C3.45355 2 2.19995 3.2536 2.19995 4.8V18.8C2.19995 20.3464 3.45355 21.6 4.99995 21.6H19C20.5463 21.6 21.7999 20.3464 21.7999 18.8V4.8C21.7999 3.2536 20.5463 2 19 2H4.99995ZM7.19995 7.8C7.19995 7.35817 7.55812 7 7.99995 7H16C16.4418 7 16.8 7.35817 16.8 7.8C16.8 8.24183 16.4418 8.6 16 8.6H7.99995C7.55812 8.6 7.19995 8.24183 7.19995 7.8ZM7.19995 11.8C7.19995 11.3582 7.55812 11 7.99995 11H16C16.4418 11 16.8 11.3582 16.8 11.8C16.8 12.2418 16.4418 12.6 16 12.6H7.99995C7.55812 12.6 7.19995 12.2418 7.19995 11.8ZM7.99995 15C7.55812 15 7.19995 15.3582 7.19995 15.8C7.19995 16.2418 7.55812 16.6 7.99995 16.6H16C16.4418 16.6 16.8 16.2418 16.8 15.8C16.8 15.3582 16.4418 15 16 15H7.99995Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNoteFill);
export default ForwardRef;
