/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRemoveCircleFill = (
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.18446 8.26829C8.93134 8.01517 8.52096 8.01517 8.26784 8.26829C8.01472 8.52141 8.01472 8.93179 8.26784 9.18491L11.0832 12.0002L8.26784 14.8156C8.01472 15.0687 8.01472 15.4791 8.26784 15.7322C8.52096 15.9853 8.93134 15.9853 9.18446 15.7322L11.9998 12.9169L14.8151 15.7322C15.0682 15.9853 15.4786 15.9853 15.7317 15.7322C15.9849 15.4791 15.9849 15.0687 15.7317 14.8156L12.9164 12.0002L15.7317 9.18491C15.9849 8.93179 15.9849 8.52141 15.7317 8.26829C15.4786 8.01517 15.0682 8.01517 14.8151 8.26829L11.9998 11.0836L9.18446 8.26829Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRemoveCircleFill);
export default ForwardRef;
