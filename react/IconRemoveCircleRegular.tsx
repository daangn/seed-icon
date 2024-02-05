import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRemoveCircleRegular = (
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
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.63265C7.37884 3.63265 3.63265 7.37884 3.63265 12C3.63265 16.6212 7.37884 20.3673 12 20.3673C16.6212 20.3673 20.3673 16.6212 20.3673 12C20.3673 7.37884 16.6212 3.63265 12 3.63265Z"
          fill="currentColor"
        />
        <path
          d="M8.26784 8.26829C8.52096 8.01517 8.93134 8.01517 9.18446 8.26829L11.9998 11.0836L14.8151 8.26829C15.0682 8.01517 15.4786 8.01517 15.7317 8.26829C15.9849 8.52141 15.9849 8.93179 15.7317 9.18491L12.9164 12.0002L15.7317 14.8156C15.9849 15.0687 15.9849 15.4791 15.7317 15.7322C15.4786 15.9853 15.0682 15.9853 14.8151 15.7322L11.9998 12.9169L9.18446 15.7322C8.93134 15.9853 8.52096 15.9853 8.26784 15.7322C8.01472 15.4791 8.01472 15.0687 8.26784 14.8156L11.0832 12.0002L8.26784 9.18491C8.01472 8.93179 8.01472 8.52141 8.26784 8.26829Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRemoveCircleRegular);
export default ForwardRef;
