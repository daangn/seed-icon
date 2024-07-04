/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSearchDocFill = (
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
    data-seed-icon-version="0.7.1"
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
          d="M18.1999 16.9999C16.9849 16.9999 15.9999 17.9849 15.9999 19.1999C15.9999 20.4149 16.9849 21.3999 18.1999 21.3999C19.4149 21.3999 20.3999 20.4149 20.3999 19.1999C20.3999 17.9849 19.4149 16.9999 18.1999 16.9999ZM14.3999 19.1999C14.3999 17.1012 16.1012 15.3999 18.1999 15.3999C20.2986 15.3999 21.9999 17.1012 21.9999 19.1999C21.9999 21.2986 20.2986 22.9999 18.1999 22.9999C16.1012 22.9999 14.3999 21.2986 14.3999 19.1999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1342 21.1342C20.4466 20.8218 20.9532 20.8218 21.2656 21.1342L22.7656 22.6342C23.078 22.9466 23.078 23.4532 22.7656 23.7656C22.4532 24.078 21.9466 24.078 21.6342 23.7656L20.1342 22.2656C19.8218 21.9532 19.8218 21.4466 20.1342 21.1342Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V14.8181C20.9822 13.9346 19.6535 13.3999 18.1999 13.3999C14.9967 13.3999 12.3999 15.9966 12.3999 19.1999C12.3999 20.6535 12.9346 21.9822 13.8181 23H5C3.34315 23 2 21.6569 2 20V4ZM7 6.6C7 6.26863 7.31603 6 7.70588 6H16.2941C16.684 6 17 6.26863 17 6.6C17 6.93137 16.684 7.2 16.2941 7.2H7.70588C7.31603 7.2 7 6.93137 7 6.6ZM7 10.8C7 10.4686 7.31603 10.2 7.70588 10.2H16.2941C16.684 10.2 17 10.4686 17 10.8C17 11.1313 16.684 11.4 16.2941 11.4H7.70588C7.31603 11.4 7 11.1313 7 10.8ZM7.70588 14.3999C7.31603 14.3999 7 14.6685 7 14.9999C7 15.3313 7.31603 15.5999 7.70588 15.5999H10.2941C10.684 15.5999 11 15.3313 11 14.9999C11 14.6685 10.684 14.3999 10.2941 14.3999H7.70588Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSearchDocFill);
export default ForwardRef;
