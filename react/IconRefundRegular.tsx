import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRefundRegular = (
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
    data-seed-icon-version="0.6.1"
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
          d="M23.5685 11.6887C23.8804 12.0016 23.8816 12.5102 23.5712 12.8246L21.5647 14.8569C21.4151 15.0083 21.2119 15.0934 21 15.0934C20.788 15.0934 20.5848 15.0083 20.4352 14.8569L18.4287 12.8246C18.1183 12.5102 18.1195 12.0016 18.4314 11.6887C18.7433 11.3757 19.2477 11.3769 19.5582 11.6914L21 13.1516L22.4417 11.6914C22.7522 11.3769 23.2566 11.3757 23.5685 11.6887Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 2.79995C5.91893 2.79995 1.79995 6.91893 1.79995 12C1.79995 17.081 5.91893 21.2 11 21.2C12.9557 21.2 14.7667 20.5906 16.2566 19.5514C16.6189 19.2986 17.1176 19.3875 17.3704 19.7499C17.6232 20.1122 17.5343 20.6109 17.1719 20.8637C15.4223 22.0841 13.2935 22.8 11 22.8C5.03528 22.8 0.199951 17.9646 0.199951 12C0.199951 6.03528 5.03528 1.19995 11 1.19995C16.9646 1.19995 21.8 6.03528 21.8 12C21.8 12.523 21.7627 13.0378 21.6906 13.5418C21.6281 13.9792 21.2228 14.283 20.7854 14.2205C20.348 14.1579 20.0442 13.7526 20.1067 13.3152C20.1681 12.8861 20.2 12.447 20.2 12C20.2 6.91893 16.081 2.79995 11 2.79995Z"
          fill="currentColor"
        />
        <path
          d="M8.77469 9.60072C8.66466 9.17281 8.22857 8.91512 7.80067 9.02515C7.37276 9.13519 7.11507 9.57127 7.22511 9.99918L7.58529 11.3999H6.99995C6.55812 11.3999 6.19995 11.7581 6.19995 12.1999C6.19995 12.6417 6.55812 12.9999 6.99995 12.9999H7.99672L8.51082 14.9992C8.59884 15.3415 8.90103 15.5854 9.25418 15.5993C9.60733 15.6132 9.92775 15.3937 10.0424 15.0594L10.7485 12.9999H11.2513L11.9574 15.0594C12.0721 15.3937 12.3925 15.6132 12.7456 15.5993C13.0988 15.5854 13.401 15.3415 13.489 14.9992L14.0031 12.9999H15C15.4418 12.9999 15.8 12.6417 15.8 12.1999C15.8 11.7581 15.4418 11.3999 15 11.3999H14.4145L14.7747 9.99918C14.8847 9.57127 14.627 9.13519 14.1991 9.02515C13.7712 8.91512 13.3351 9.17281 13.2251 9.60072L12.7625 11.3999H12.3942L11.7567 9.54049C11.6458 9.21714 11.3417 8.99995 10.9999 8.99995C10.6581 8.99995 10.354 9.21714 10.2431 9.54049L9.60563 11.3999H9.23734L8.77469 9.60072Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRefundRegular);
export default ForwardRef;
