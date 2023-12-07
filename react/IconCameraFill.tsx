import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCameraFill = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.2 6L7.74 3.43C7.89 3.19 8.23 3 8.49 3H15.51C15.78 3 16.11 3.19 16.26 3.43L17.8 6H20C21.1 6 22 6.89 22 8V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V8C2 6.9 2.89 6 4 6H6.2ZM11.0002 5.70001C10.5584 5.70001 10.2002 6.05818 10.2002 6.50001C10.2002 6.94184 10.5584 7.30001 11.0002 7.30001H13.0002C13.442 7.30001 13.8002 6.94184 13.8002 6.50001C13.8002 6.05818 13.442 5.70001 13.0002 5.70001H11.0002ZM9.3002 13C9.3002 11.5088 10.509 10.3 12.0002 10.3C13.4914 10.3 14.7002 11.5088 14.7002 13C14.7002 14.4912 13.4914 15.7 12.0002 15.7C10.509 15.7 9.3002 14.4912 9.3002 13ZM12.0002 8.70001C9.62537 8.70001 7.7002 10.6252 7.7002 13C7.7002 15.3748 9.62537 17.3 12.0002 17.3C14.375 17.3 16.3002 15.3748 16.3002 13C16.3002 10.6252 14.375 8.70001 12.0002 8.70001Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCameraFill);
export default ForwardRef;
