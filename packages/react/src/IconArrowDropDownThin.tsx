/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArrowDropDownThin = (
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
        d="M11.9999 15.6001C12.178 15.6001 12.3468 15.521 12.4608 15.3842L17.4608 9.38421C17.6099 9.20536 17.642 8.95644 17.5433 8.7456C17.4445 8.53477 17.2327 8.4001 16.9999 8.4001H6.99991C6.7671 8.4001 6.5553 8.53477 6.45656 8.7456C6.35781 8.95644 6.38994 9.20536 6.53898 9.38421L11.539 15.3842C11.653 15.521 11.8218 15.6001 11.9999 15.6001ZM8.28093 9.6001H15.7189L11.9999 14.0629L8.28093 9.6001Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArrowDropDownThin);
export default ForwardRef;
