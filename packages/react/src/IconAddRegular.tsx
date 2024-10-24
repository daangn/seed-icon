/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconAddRegular = (
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
        d="M11.9999 2C12.4712 2 12.8533 2.38206 12.8533 2.85335V11.1467H21.1467C21.6179 11.1467 22 11.5288 22 12.0001C22 12.4713 21.6179 12.8534 21.1467 12.8534H12.8533V21.1466C12.8533 21.6179 12.4712 22 11.9999 22C11.5287 22 11.1466 21.6179 11.1466 21.1466V12.8534H2.85334C2.38205 12.8534 2 12.4713 2 12.0001C2 11.5288 2.38205 11.1467 2.85334 11.1467H11.1466V2.85335C11.1466 2.38206 11.5287 2 11.9999 2Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconAddRegular);
export default ForwardRef;
