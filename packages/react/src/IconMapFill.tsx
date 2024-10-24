/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMapFill = (
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
        d="M2.60783 5.58295L8 3.28418V18.4421L3.39217 20.4065C2.73251 20.6877 2 20.2037 2 19.4866V6.50284C2 6.10212 2.23921 5.74009 2.60783 5.58295ZM15 20.8579L9.6 18.5558V3.39786L15 5.69997V20.8579ZM16.6 20.46L21.3922 18.417C21.7608 18.2598 22 17.8978 22 17.4971V4.51337C22 3.79627 21.2675 3.31225 20.6078 3.59347L16.6 5.30207V20.46Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMapFill);
export default ForwardRef;
