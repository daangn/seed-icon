import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHeadphoneThin = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M11.9999 2.8999C6.42183 2.8999 1.8999 7.42183 1.8999 12.9999V17.4999C1.8999 17.8313 2.16853 18.0999 2.4999 18.0999C2.83127 18.0999 3.0999 17.8313 3.0999 17.4999V12.9999C3.0999 8.08457 7.08457 4.0999 11.9999 4.0999C16.9152 4.0999 20.8999 8.08457 20.8999 12.9999V17.4999C20.8999 17.8313 21.1685 18.0999 21.4999 18.0999C21.8313 18.0999 22.0999 17.8313 22.0999 17.4999V12.9999C22.0999 7.42183 17.578 2.8999 11.9999 2.8999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.3999 13.9999C3.3999 13.3924 3.89239 12.8999 4.4999 12.8999H5.9999C7.1597 12.8999 8.0999 13.8401 8.0999 14.9999V18.9999C8.0999 20.1597 7.1597 21.0999 5.9999 21.0999H4.4999C3.89239 21.0999 3.3999 20.6074 3.3999 19.9999V13.9999ZM4.5999 14.0999V19.8999H5.9999C6.49696 19.8999 6.8999 19.497 6.8999 18.9999V14.9999C6.8999 14.5028 6.49696 14.0999 5.9999 14.0999H4.5999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.6001 13.9999C20.6001 13.3924 20.1076 12.8999 19.5001 12.8999H18.0001C16.8403 12.8999 15.9001 13.8401 15.9001 14.9999V18.9999C15.9001 20.1597 16.8403 21.0999 18.0001 21.0999H19.5001C20.1076 21.0999 20.6001 20.6074 20.6001 19.9999V13.9999ZM19.4001 14.0999V19.8999H18.0001C17.503 19.8999 17.1001 19.497 17.1001 18.9999V14.9999C17.1001 14.5028 17.503 14.0999 18.0001 14.0999H19.4001Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHeadphoneThin);
export default ForwardRef;
