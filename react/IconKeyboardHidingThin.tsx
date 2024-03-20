import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconKeyboardHidingThin = (
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
    data-seed-icon-version="0.6.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_9147_1774)">
      <g>
        <path
          d="M8.7163 10.6459C8.7163 10.3145 8.98493 10.0459 9.3163 10.0459H14.6795C15.0109 10.0459 15.2795 10.3145 15.2795 10.6459C15.2795 10.9773 15.0109 11.2459 14.6795 11.2459H9.3163C8.98493 11.2459 8.7163 10.9773 8.7163 10.6459Z"
          fill="currentColor"
        />
        <path
          d="M6.98018 6.34995C6.98018 6.84701 6.57723 7.24995 6.08018 7.24995C5.58312 7.24995 5.18018 6.84701 5.18018 6.34995C5.18018 5.85289 5.58312 5.44995 6.08018 5.44995C6.57723 5.44995 6.98018 5.85289 6.98018 6.34995Z"
          fill="currentColor"
        />
        <path
          d="M10.0802 7.24995C10.5772 7.24995 10.9802 6.84701 10.9802 6.34995C10.9802 5.85289 10.5772 5.44995 10.0802 5.44995C9.58312 5.44995 9.18018 5.85289 9.18018 6.34995C9.18018 6.84701 9.58312 7.24995 10.0802 7.24995Z"
          fill="currentColor"
        />
        <path
          d="M14.9802 6.34995C14.9802 6.84701 14.5772 7.24995 14.0802 7.24995C13.5831 7.24995 13.1802 6.84701 13.1802 6.34995C13.1802 5.85289 13.5831 5.44995 14.0802 5.44995C14.5772 5.44995 14.9802 5.85289 14.9802 6.34995Z"
          fill="currentColor"
        />
        <path
          d="M18.0802 7.24995C18.5772 7.24995 18.9802 6.84701 18.9802 6.34995C18.9802 5.85289 18.5772 5.44995 18.0802 5.44995C17.5831 5.44995 17.1802 5.85289 17.1802 6.34995C17.1802 6.84701 17.5831 7.24995 18.0802 7.24995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.2499 0.649902C2.26168 0.649902 0.649902 2.26168 0.649902 4.2499V11.7499C0.649902 13.7381 2.26168 15.3499 4.2499 15.3499H19.7499C21.7381 15.3499 23.3499 13.7381 23.3499 11.7499V4.2499C23.3499 2.26168 21.7381 0.649902 19.7499 0.649902H4.2499ZM1.8499 4.2499C1.8499 2.92442 2.92442 1.8499 4.2499 1.8499H19.7499C21.0754 1.8499 22.1499 2.92442 22.1499 4.2499V11.7499C22.1499 13.0754 21.0754 14.1499 19.7499 14.1499H4.2499C2.92442 14.1499 1.8499 13.0754 1.8499 11.7499V4.2499Z"
          fill="currentColor"
        />
        <path
          d="M7.57564 18.0756C7.80995 17.8413 8.18985 17.8413 8.42417 18.0756L11.9999 21.6514L15.5756 18.0756C15.81 17.8413 16.1899 17.8413 16.4242 18.0756C16.6585 18.31 16.6585 18.6899 16.4242 18.9242L12.4242 22.9242C12.1899 23.1585 11.81 23.1585 11.5756 22.9242L7.57564 18.9242C7.34132 18.6899 7.34132 18.31 7.57564 18.0756Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath>
        <rect width={24} height={24} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(IconKeyboardHidingThin);
export default ForwardRef;
