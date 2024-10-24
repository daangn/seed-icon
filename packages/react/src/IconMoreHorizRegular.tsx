/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoreHorizRegular = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7998 12.0002C15.7998 11.2852 16.3848 10.7002 17.0998 10.7002C17.8148 10.7002 18.3998 11.2852 18.3998 12.0002C18.3998 12.7152 17.8148 13.3002 17.0998 13.3002C16.3848 13.3002 15.7998 12.7152 15.7998 12.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2997 12.0002C13.2997 12.7152 12.7147 13.3002 11.9997 13.3002C11.2847 13.3002 10.6997 12.7152 10.6997 12.0002C10.6997 11.2852 11.2847 10.7002 11.9997 10.7002C12.7147 10.7002 13.2997 11.2852 13.2997 12.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.2001 12.0002C8.2001 12.7152 7.6151 13.3002 6.9001 13.3002C6.1851 13.3002 5.6001 12.7152 5.6001 12.0002C5.6001 11.2852 6.1851 10.7002 6.9001 10.7002C7.6151 10.7002 8.2001 11.2852 8.2001 12.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoreHorizRegular);
export default ForwardRef;
