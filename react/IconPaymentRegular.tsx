import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPaymentRegular = (
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
          d="M1 5.99995C1 4.45355 2.2536 3.19995 3.8 3.19995H20.2C21.7464 3.19995 23 4.45355 23 5.99995V18C23 19.5463 21.7464 20.7999 20.2 20.7999H3.8C2.2536 20.7999 1 19.5463 1 18V5.99995ZM3.8 4.79995C3.13726 4.79995 2.6 5.33721 2.6 5.99995V18C2.6 18.6627 3.13726 19.2 3.8 19.2H20.2C20.8627 19.2 21.4 18.6627 21.4 18V5.99995C21.4 5.33721 20.8627 4.79995 20.2 4.79995H3.8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 8.99995C1 8.55812 1.35817 8.19995 1.8 8.19995H22.2C22.6418 8.19995 23 8.55812 23 8.99995C23 9.44178 22.6418 9.79995 22.2 9.79995H1.8C1.35817 9.79995 1 9.44178 1 8.99995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.19995 16C4.19995 15.5581 4.55812 15.2 4.99995 15.2H9.99995C10.4418 15.2 10.8 15.5581 10.8 16C10.8 16.4418 10.4418 16.8 9.99995 16.8H4.99995C4.55812 16.8 4.19995 16.4418 4.19995 16Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPaymentRegular);
export default ForwardRef;
