/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHouseFill = (
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
        d="M21.9852 7.9825L12.2452 2.1425C11.9252 1.9525 11.5352 1.9525 11.2152 2.1425L1.48524 7.9825C1.01524 8.2625 0.855243 8.8825 1.14524 9.3525C1.33524 9.6625 1.66524 9.8425 2.00524 9.8425C2.18524 9.8425 2.35524 9.7925 2.51524 9.7025L2.73524 9.5725V20.5825C2.73524 21.1325 3.18524 21.5825 3.73524 21.5825H19.7352C20.2852 21.5825 20.7352 21.1325 20.7352 20.5825V9.5625L20.9552 9.6925C21.4252 9.9725 22.0452 9.8225 22.3252 9.3525C22.6052 8.8825 22.4552 8.2625 21.9852 7.9825ZM10.2352 14.7425C10.2352 14.8525 10.1452 14.9425 10.0352 14.9425H7.93524C7.82524 14.9425 7.73524 14.8525 7.73524 14.7425V12.6425C7.73524 12.5325 7.82524 12.4425 7.93524 12.4425H10.0352C10.1452 12.4425 10.2352 12.5325 10.2352 12.6425V14.7425ZM15.7352 14.7425C15.7352 14.8525 15.6452 14.9425 15.5352 14.9425H13.4352C13.3252 14.9425 13.2352 14.8525 13.2352 14.7425V12.6425C13.2352 12.5325 13.3252 12.4425 13.4352 12.4425H15.5352C15.6452 12.4425 15.7352 12.5325 15.7352 12.6425V14.7425Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHouseFill);
export default ForwardRef;
