/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInviteFill = (
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
        d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM5.465 8.34927C5.10547 8.09246 4.60583 8.17574 4.34903 8.53527C4.09222 8.8948 4.17549 9.39444 4.53502 9.65124L11.535 14.6512C11.8132 14.8499 12.1868 14.8499 12.465 14.6512L19.465 9.65124C19.8245 9.39444 19.9078 8.8948 19.651 8.53527C19.3942 8.17574 18.8946 8.09246 18.535 8.34927L12 13.0171L5.465 8.34927Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInviteFill);
export default ForwardRef;
