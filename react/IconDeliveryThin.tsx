import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDeliveryThin = (
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
          d="M6.40005 13.9999C6.40005 13.6685 6.66868 13.3999 7.00005 13.3999H12C12.3314 13.3999 12.6 13.6685 12.6 13.9999C12.6 14.3313 12.3314 14.5999 12 14.5999H7.00005C6.66868 14.5999 6.40005 14.3313 6.40005 13.9999Z"
          fill="currentColor"
        />
        <path
          d="M7.00005 16.3999C6.66868 16.3999 6.40005 16.6685 6.40005 16.9999C6.40005 17.3313 6.66868 17.5999 7.00005 17.5999H12C12.3314 17.5999 12.6 17.3313 12.6 16.9999C12.6 16.6685 12.3314 16.3999 12 16.3999H7.00005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.6 2C3.16406 2 2 3.16406 2 4.6L2 19.4C2 20.8359 3.16406 22 4.6 22H19.4001C20.8361 22 22.0001 20.8359 22.0001 19.4V4.6C22.0001 3.16406 20.8361 2 19.4001 2L4.6 2ZM3.2 4.6C3.2 3.8268 3.8268 3.2 4.6 3.2L8.40005 3.2V7.59998C8.40005 7.93135 8.66868 8.19998 9.00005 8.19998H15C15.3314 8.19998 15.6 7.93135 15.6 7.59998V3.2H19.4001C20.1733 3.2 20.8001 3.8268 20.8001 4.6V19.4C20.8001 20.1732 20.1733 20.8 19.4001 20.8H4.6C3.8268 20.8 3.2 20.1732 3.2 19.4V4.6ZM14.4 3.2H9.60005V6.99998H14.4V3.2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDeliveryThin);
export default ForwardRef;
