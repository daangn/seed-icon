/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconImportFill = (
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
          d="M5 1C3.34315 1 2 2.34315 2 4V20C2 21.6569 3.34315 23 5 23H16.0402L14.22 21.1798C13.1265 20.0863 13.1265 18.3135 14.22 17.22L17.22 14.22C17.7159 13.7241 18.3514 13.4531 19 13.407V13.3999H22V4C22 2.34315 20.6569 1 19 1H5ZM7 6.6C7 6.26863 7.31603 6 7.70588 6H16.2941C16.684 6 17 6.26863 17 6.6C17 6.93137 16.684 7.2 16.2941 7.2H7.70588C7.31603 7.2 7 6.93137 7 6.6ZM7 10.8C7 10.4686 7.31603 10.2 7.70588 10.2H16.2941C16.684 10.2 17 10.4686 17 10.8C17 11.1313 16.684 11.4 16.2941 11.4H7.70588C7.31603 11.4 7 11.1313 7 10.8ZM7 14.9999C7 14.6685 7.31603 14.3999 7.70588 14.3999H10.2941C10.684 14.3999 11 14.6685 11 14.9999C11 15.3313 10.684 15.5999 10.2941 15.5999H7.70588C7.31603 15.5999 7 15.3313 7 14.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8998 19.1999C16.8998 18.7581 17.258 18.3999 17.6998 18.3999H22.1998C22.6416 18.3999 22.9998 18.7581 22.9998 19.1999C22.9998 19.6417 22.6416 19.9999 22.1998 19.9999H17.6998C17.258 19.9999 16.8998 19.6417 16.8998 19.1999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7656 15.6342C19.4532 15.3218 18.9466 15.3218 18.6342 15.6342L15.6342 18.6342C15.3218 18.9466 15.3218 19.4532 15.6342 19.7656L18.6342 22.7656C18.9466 23.078 19.4532 23.078 19.7656 22.7656C20.078 22.4532 20.078 21.9466 19.7656 21.6342L17.3313 19.1999L19.7656 16.7656C20.078 16.4532 20.078 15.9466 19.7656 15.6342Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconImportFill);
export default ForwardRef;
