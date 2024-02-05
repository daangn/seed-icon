import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInviteThin = (
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
          d="M20 4.2H4C3.00589 4.2 2.2 5.00589 2.2 6V18C2.2 18.9941 3.00589 19.8 4 19.8H20C20.9941 19.8 21.8 18.9941 21.8 18V6C21.8 5.00589 20.9941 4.2 20 4.2ZM4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.52006 7.63994C3.71888 7.37484 4.09496 7.32112 4.36006 7.51994L12.0001 13.2499L19.6401 7.51994C19.9052 7.32112 20.2812 7.37484 20.4801 7.63994C20.6789 7.90503 20.6252 8.28112 20.3601 8.47994L12.3601 14.4799C12.1467 14.6399 11.8534 14.6399 11.6401 14.4799L3.64006 8.47994C3.37496 8.28112 3.32124 7.90503 3.52006 7.63994Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInviteThin);
export default ForwardRef;
