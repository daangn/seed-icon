import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPauseFill = (
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
    data-seed-icon-version="0.5.6"
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
          d="M3.3999 5.0002C3.3999 4.00608 4.20579 3.2002 5.1999 3.2002H8.1999C9.19402 3.2002 9.9999 4.00608 9.9999 5.0002V19.0002C9.9999 19.9943 9.19402 20.8002 8.1999 20.8002H5.1999C4.20579 20.8002 3.3999 19.9943 3.3999 19.0002V5.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9999 5.0002C13.9999 4.00608 14.8058 3.2002 15.7999 3.2002H18.7999C19.794 3.2002 20.5999 4.00608 20.5999 5.0002V19.0002C20.5999 19.9943 19.794 20.8002 18.7999 20.8002H15.7999C14.8058 20.8002 13.9999 19.9943 13.9999 19.0002V5.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPauseFill);
export default ForwardRef;
