import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoSeveralFill = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4.55C2 3.14167 3.14167 2 4.55 2H16.45C17.8583 2 19 3.14167 19 4.55V16.45C19 17.8583 17.8583 19 16.45 19H4.55C3.14167 19 2 17.8583 2 16.45V4.55ZM7.1 9.65C8.03888 9.65 8.8 8.88888 8.8 7.95C8.8 7.01112 8.03888 6.25 7.1 6.25C6.16112 6.25 5.4 7.01112 5.4 7.95C5.4 8.88888 6.16112 9.65 7.1 9.65ZM12.2 10.5L9.1939 14.1073L7.525 12.2L4.55 15.6H16.45L12.2 10.5Z"
      fill="currentColor"
    />
    <path
      d="M21.7999 6.99995C21.7999 6.55812 21.4418 6.19995 21 6.19995C20.5581 6.19995 20.2 6.55812 20.2 6.99995V19C20.2 19.6627 19.6627 20.2 19 20.2H6.99995C6.55812 20.2 6.19995 20.5581 6.19995 21C6.19995 21.4418 6.55812 21.7999 6.99995 21.7999H19C20.5463 21.7999 21.7999 20.5463 21.7999 19V6.99995Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(IconPhotoSeveralFill);
export default ForwardRef;
