/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconExpandMoreFill = (
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
        d="M2.79289 7.29289C3.18342 6.90237 3.81658 6.90237 4.20711 7.29289L12 15.0858L19.7929 7.29289C20.1834 6.90237 20.8166 6.90237 21.2071 7.29289C21.5976 7.68342 21.5976 8.31658 21.2071 8.70711L12.7071 17.2071C12.3166 17.5976 11.6834 17.5976 11.2929 17.2071L2.79289 8.70711C2.40237 8.31658 2.40237 7.68342 2.79289 7.29289Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconExpandMoreFill);
export default ForwardRef;
