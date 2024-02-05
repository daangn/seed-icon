import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVoteRegular = (
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
          d="M16.6087 10.319C16.8954 9.9828 16.8552 9.47787 16.519 9.19122C16.1828 8.90457 15.6778 8.94476 15.3912 9.28098L10.8423 14.6165L8.57012 12.308C8.26019 11.9931 7.75368 11.989 7.43878 12.299C7.12389 12.6089 7.11986 13.1154 7.42979 13.4303L10.3144 16.3612C10.4717 16.521 10.689 16.6075 10.9131 16.5995C11.1373 16.5915 11.3478 16.4897 11.4933 16.319L16.6087 10.319Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.19995 5.8C3.19995 4.2536 4.45355 3 5.99995 3H18C19.5463 3 20.7999 4.2536 20.7999 5.8V20H22C22.4418 20 22.7999 20.3582 22.7999 20.8C22.7999 21.2418 22.4418 21.6 22 21.6H1.99995C1.55812 21.6 1.19995 21.2418 1.19995 20.8C1.19995 20.3582 1.55812 20 1.99995 20H3.19995V5.8ZM19.2 5.8V20H4.79995V5.8C4.79995 5.13726 5.33721 4.6 5.99995 4.6H18C18.6627 4.6 19.2 5.13726 19.2 5.8Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVoteRegular);
export default ForwardRef;
