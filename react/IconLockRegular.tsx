import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLockRegular = (
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
          d="M9.2 15C9.2 13.4536 10.4536 12.2 12 12.2C13.5464 12.2 14.8 13.4536 14.8 15C14.8 16.5464 13.5464 17.8 12 17.8C10.4536 17.8 9.2 16.5464 9.2 15ZM12 13.8C11.3373 13.8 10.8 14.3373 10.8 15C10.8 15.6627 11.3373 16.2 12 16.2C12.6627 16.2 13.2 15.6627 13.2 15C13.2 14.3373 12.6627 13.8 12 13.8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10.6H4C3.77909 10.6 3.6 10.7791 3.6 11V20C3.6 20.2209 3.77909 20.4 4 20.4H20C20.2209 20.4 20.4 20.2209 20.4 20V11C20.4 10.7791 20.2209 10.6 20 10.6ZM4 9.00001C2.89543 9.00001 2 9.89544 2 11V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89544 21.1046 9.00001 20 9.00001H4Z"
          fill="currentColor"
        />
        <path
          d="M15.15 9.00005V6.75C15.15 5.0103 13.7397 3.6 12 3.6C10.2603 3.6 8.85 5.0103 8.85 6.75V9.00005H7.25V6.75C7.25 4.12665 9.37665 2 12 2C14.6234 2 16.75 4.12665 16.75 6.75V9.00005H15.15Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLockRegular);
export default ForwardRef;
