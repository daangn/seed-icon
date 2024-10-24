/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReplyMissionFill = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5162 22.1801C17.763 22.3329 18.0731 22.3401 18.3267 22.1989C18.5803 22.0577 18.7374 21.7902 18.7374 21.5V18.1773C20.9039 16.4699 22.2999 13.9342 22.2999 11.0806C22.2999 5.82515 17.6099 1.69995 11.9999 1.69995C6.38997 1.69995 1.69995 5.82515 1.69995 11.0806C1.69995 16.336 6.38997 20.4612 11.9999 20.4612C12.7774 20.4612 13.5357 20.3827 14.2654 20.2336C14.6332 20.4345 15.2982 20.8284 15.965 21.2315C16.3711 21.4769 16.7591 21.7142 17.0457 21.8902C17.1889 21.9781 17.3067 22.0507 17.3886 22.1012L17.5162 22.1801ZM8.49995 8.69995C8.05812 8.69995 7.69995 9.05812 7.69995 9.49995C7.69995 9.94178 8.05812 10.3 8.49995 10.3H16.375C16.8168 10.3 17.175 9.94178 17.175 9.49995C17.175 9.05812 16.8168 8.69995 16.375 8.69995H8.49995ZM8.49995 12.2C8.05812 12.2 7.69995 12.5581 7.69995 13C7.69995 13.4418 8.05812 13.8 8.49995 13.8H16.375C16.8168 13.8 17.175 13.4418 17.175 13C17.175 12.5581 16.8168 12.2 16.375 12.2H8.49995Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReplyMissionFill);
export default ForwardRef;
