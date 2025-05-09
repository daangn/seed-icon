/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSellRegular = (
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
          d="M17 3.6H7C5.12223 3.6 3.6 5.12223 3.6 7V17C3.6 18.8778 5.12223 20.4 7 20.4H17C18.8778 20.4 20.4 18.8778 20.4 17V7C20.4 5.12223 18.8778 3.6 17 3.6ZM7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7Z"
          fill="currentColor"
        />
        <path
          d="M11.9997 6.72241C12.3577 6.72241 12.6478 7.0126 12.6478 7.37056V11.352H16.6293C16.9873 11.352 17.2775 11.6422 17.2775 12.0002C17.2775 12.3582 16.9873 12.6483 16.6293 12.6483H12.6478V16.6298C12.6478 16.9878 12.3577 17.278 11.9997 17.278C11.6417 17.278 11.3516 16.9878 11.3516 16.6298V12.6483H7.37007C7.01211 12.6483 6.72192 12.3582 6.72192 12.0002C6.72192 11.6422 7.01211 11.352 7.37007 11.352H11.3516V7.37056C11.3516 7.0126 11.6417 6.72241 11.9997 6.72241Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSellRegular);
export default ForwardRef;
