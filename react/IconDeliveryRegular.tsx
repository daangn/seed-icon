import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDeliveryRegular = (
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
      <g>
        <path
          d="M6.19985 14C6.19985 13.5581 6.55803 13.2 6.99985 13.2H11.9999C12.4417 13.2 12.7999 13.5581 12.7999 14C12.7999 14.4418 12.4417 14.8 11.9999 14.8H6.99985C6.55803 14.8 6.19985 14.4418 6.19985 14Z"
          fill="currentColor"
        />
        <path
          d="M6.99985 16.2C6.55803 16.2 6.19985 16.5581 6.19985 17C6.19985 17.4418 6.55803 17.8 6.99985 17.8H11.9999C12.4417 17.8 12.7999 17.4418 12.7999 17C12.7999 16.5581 12.4417 16.2 11.9999 16.2H6.99985Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.8 2C3.2536 2 2 3.2536 2 4.8V19.2C2 20.7464 3.2536 22 4.8 22H19.1999C20.7463 22 21.9999 20.7464 21.9999 19.2V4.8C21.9999 3.2536 20.7463 2 19.1999 2L4.8 2ZM3.6 4.8C3.6 4.13726 4.13726 3.6 4.8 3.6L8.19985 3.6V7.80005C8.19985 8.24188 8.55803 8.60005 8.99985 8.60005H14.9999C15.4417 8.60005 15.7999 8.24188 15.7999 7.80005V3.6H19.1999C19.8626 3.6 20.3999 4.13726 20.3999 4.8V19.2C20.3999 19.8627 19.8626 20.4 19.1999 20.4H4.8C4.13726 20.4 3.6 19.8627 3.6 19.2V4.8ZM14.1999 3.6H9.79985V7.00005H14.1999V3.6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDeliveryRegular);
export default ForwardRef;
