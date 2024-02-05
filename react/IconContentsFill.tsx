import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconContentsFill = (
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
          d="M5.0002 3.2002C4.00608 3.2002 3.2002 4.00608 3.2002 5.0002V9.0002C3.2002 9.99431 4.00608 10.8002 5.0002 10.8002H9.0002C9.99431 10.8002 10.8002 9.99431 10.8002 9.0002V5.0002C10.8002 4.00608 9.99431 3.2002 9.0002 3.2002H5.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0002 3.2002C14.0061 3.2002 13.2002 4.00608 13.2002 5.0002V9.0002C13.2002 9.99431 14.0061 10.8002 15.0002 10.8002H19.0002C19.9943 10.8002 20.8002 9.99431 20.8002 9.0002V5.0002C20.8002 4.00608 19.9943 3.2002 19.0002 3.2002H15.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.0002 13.2002C4.00608 13.2002 3.2002 14.0061 3.2002 15.0002V19.0002C3.2002 19.9943 4.00608 20.8002 5.0002 20.8002H9.0002C9.99431 20.8002 10.8002 19.9943 10.8002 19.0002V15.0002C10.8002 14.0061 9.99431 13.2002 9.0002 13.2002H5.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0002 13.2002C14.0061 13.2002 13.2002 14.0061 13.2002 15.0002V19.0002C13.2002 19.9943 14.0061 20.8002 15.0002 20.8002H19.0002C19.9943 20.8002 20.8002 19.9943 20.8002 19.0002V15.0002C20.8002 14.0061 19.9943 13.2002 19.0002 13.2002H15.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconContentsFill);
export default ForwardRef;
