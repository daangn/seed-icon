/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNoteRegular = (
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
          d="M2.19995 4.99995C2.19995 3.45355 3.45355 2.19995 4.99995 2.19995H19C20.5463 2.19995 21.7999 3.45355 21.7999 4.99995V19C21.7999 20.5463 20.5463 21.7999 19 21.7999H4.99995C3.45355 21.7999 2.19995 20.5463 2.19995 19V4.99995ZM4.99995 3.79995C4.33721 3.79995 3.79995 4.33721 3.79995 4.99995V19C3.79995 19.6627 4.33721 20.2 4.99995 20.2H19C19.6627 20.2 20.2 19.6627 20.2 19V4.99995C20.2 4.33721 19.6627 3.79995 19 3.79995H4.99995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 7.99995C7.19995 7.55812 7.55812 7.19995 7.99995 7.19995H16C16.4418 7.19995 16.8 7.55812 16.8 7.99995C16.8 8.44178 16.4418 8.79995 16 8.79995H7.99995C7.55812 8.79995 7.19995 8.44178 7.19995 7.99995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 12C7.19995 11.5581 7.55812 11.2 7.99995 11.2H16C16.4418 11.2 16.8 11.5581 16.8 12C16.8 12.4418 16.4418 12.8 16 12.8H7.99995C7.55812 12.8 7.19995 12.4418 7.19995 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 16C7.19995 15.5581 7.55812 15.2 7.99995 15.2H16C16.4418 15.2 16.8 15.5581 16.8 16C16.8 16.4418 16.4418 16.8 16 16.8H7.99995C7.55812 16.8 7.19995 16.4418 7.19995 16Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNoteRegular);
export default ForwardRef;
