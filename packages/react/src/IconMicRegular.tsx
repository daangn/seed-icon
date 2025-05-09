/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMicRegular = (
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
    data-seed-icon-version="0.7.3"
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
          d="M12 0.300049C9.12807 0.300049 6.79995 2.62817 6.79995 5.50005V11.5C6.79995 14.3719 9.12807 16.7001 12 16.7001C14.8718 16.7001 17.2 14.3719 17.2 11.5V5.50005C17.2 2.62817 14.8718 0.300049 12 0.300049ZM8.39995 5.50005C8.39995 3.51182 10.0117 1.90005 12 1.90005C13.9882 1.90005 15.6 3.51182 15.6 5.50005V11.5C15.6 13.4883 13.9882 15.1 12 15.1C10.0117 15.1 8.39995 13.4883 8.39995 11.5V5.50005Z"
          fill="currentColor"
        />
        <path
          d="M3.99995 10.7C3.55812 10.7 3.19995 11.0582 3.19995 11.5C3.19995 16.1245 6.7671 19.9159 11.3 20.2726V22.1H8.59995C8.15812 22.1 7.79995 22.4582 7.79995 22.9C7.79995 23.3419 8.15812 23.7001 8.59995 23.7001L15.4 23.7C15.8418 23.7 16.2 23.3419 16.2 22.9C16.2 22.4582 15.8418 22.1 15.4 22.1H12.9V20.2546C17.3373 19.8038 20.8 16.0563 20.8 11.5C20.8 11.0582 20.4418 10.7 20 10.7C19.5581 10.7 19.2 11.0582 19.2 11.5C19.2 15.4765 15.9764 18.7 12 18.7C8.0235 18.7 4.79995 15.4765 4.79995 11.5C4.79995 11.0582 4.44178 10.7 3.99995 10.7Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMicRegular);
export default ForwardRef;
