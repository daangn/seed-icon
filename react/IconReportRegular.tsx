import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReportRegular = (
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
    data-seed-icon-version="0.4.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M11.3142 6.46173C11.3142 6.05389 11.6212 5.72327 11.9999 5.72327C14.4882 5.72327 16.7325 7.68821 17.1335 10.2788C17.1957 10.6811 16.9434 11.0616 16.5698 11.1286C16.1962 11.1957 15.8429 10.9239 15.7807 10.5216C15.4959 8.6814 13.8545 7.20019 11.9999 7.20019C11.6212 7.20019 11.3142 6.86957 11.3142 6.46173Z"
          fill="currentColor"
        />
        <path
          d="M16.5999 13.2999C16.9865 13.2999 17.2999 12.9865 17.2999 12.5999C17.2999 12.2133 16.9865 11.8999 16.5999 11.8999C16.2133 11.8999 15.8999 12.2133 15.8999 12.5999C15.8999 12.9865 16.2133 13.2999 16.5999 13.2999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.45728 16.8003V11.3848C4.45728 6.91542 7.84999 3.26172 12.0001 3.26172C16.1503 3.26172 19.543 6.91542 19.543 11.3848V16.8003H20.0004C20.3791 16.8003 20.6861 17.1309 20.6861 17.5387V20.0003C20.6861 20.4081 20.3791 20.7387 20.0004 20.7387H4.00041C3.6217 20.7387 3.3147 20.4081 3.3147 20.0003V17.5387C3.3147 17.1309 3.6217 16.8003 4.00041 16.8003H4.45728ZM5.8287 11.3848C5.8287 7.7311 8.60741 4.73864 12.0001 4.73864C15.3929 4.73864 18.1716 7.7311 18.1716 11.3848V16.8003H5.8287V11.3848ZM4.68613 19.2618V18.2772H19.3147V19.2618H4.68613Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReportRegular);
export default ForwardRef;
