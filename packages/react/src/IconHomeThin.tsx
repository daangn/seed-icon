/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHomeThin = (
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
        d="M12.0001 3.36232L3.2245 11.1628V20.7755H8.53065V16.0816C8.53065 14.1215 10.0399 12.6122 12.0001 12.6122C13.9602 12.6122 15.4695 14.1215 15.4695 16.0816V20.7755H20.7756V11.1628L12.0001 3.36232ZM12.5424 2.20608C12.2331 1.93115 11.767 1.93115 11.4577 2.20608L2.27399 10.3694C2.09971 10.5243 2 10.7463 2 10.9795V21.1836C2 21.6345 2.36548 22 2.81633 22H8.93881C9.38966 22 9.75514 21.6344 9.75514 21.1836V16.0816C9.75514 14.7977 10.7162 13.8367 12.0001 13.8367C13.2839 13.8367 14.245 14.7977 14.245 16.0816V21.1836C14.245 21.6345 14.6104 22 15.0613 22H21.1838C21.6346 22 22.0001 21.6345 22.0001 21.1836V10.9795C22.0001 10.7463 21.9004 10.5243 21.7261 10.3694L12.5424 2.20608Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHomeThin);
export default ForwardRef;
