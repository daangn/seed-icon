/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCondoRegular = (
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
          d="M7.00003 8.60018V6.60018H9.00003V8.60018H7.00003Z"
          fill="currentColor"
        />
        <path
          d="M7.00003 12.6002V10.6002H9.00003V12.6002H7.00003Z"
          fill="currentColor"
        />
        <path d="M11 8.60018V6.60018H13V8.60018H11Z" fill="currentColor" />
        <path d="M11 12.6002V10.6002H13V12.6002H11Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.60693 4.3C2.60693 2.7536 3.86053 1.5 5.40693 1.5L14.5 1.50002C16.0464 1.50002 17.3 2.75362 17.3 4.30002L17.3 7.80013H19.5C20.4941 7.80013 21.3 8.60602 21.3 9.60013V21.6001C21.3 22.042 20.9418 22.4001 20.5 22.4001H12.0018H12H7.99999H7.99822L3.40688 22.4001C2.96505 22.4001 2.60688 22.0419 2.60688 21.6001L2.60693 4.3ZM8.79998 20.8001H11.2V17.4001H8.79998V20.8001ZM12.8 20.8001V16.6001C12.8 16.1583 12.4418 15.8001 12 15.8001H7.99999C7.55816 15.8001 7.19999 16.1583 7.19999 16.6001V20.8001L4.20688 20.8001L4.20693 4.3C4.20693 3.63726 4.74419 3.1 5.40693 3.1L14.5 3.10002C15.1628 3.10002 15.7 3.63727 15.7 4.30002L15.7 20.8001H12.8ZM17.3 20.8001V9.40013H19.5C19.6104 9.40013 19.7 9.48967 19.7 9.60013V20.8001H17.3Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCondoRegular);
export default ForwardRef;
