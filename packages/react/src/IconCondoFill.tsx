/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCondoFill = (
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
          d="M5.40878 1.54004C3.841 1.54004 2.57007 2.81097 2.57007 4.37875V21.6138C2.57007 22.0617 2.93319 22.4249 3.38113 22.4249H7.6392V17.5585C7.6392 17.1106 8.00232 16.7474 8.45026 16.7474H10.4779C10.9258 16.7474 11.289 17.1106 11.289 17.5585V22.4249H15.547C15.995 22.4249 16.3581 22.0617 16.3581 21.6138V4.37875C16.3581 2.81097 15.0872 1.54004 13.5194 1.54004H5.40878ZM6.42266 6.40645V8.43411H8.45031V6.40645H6.42266ZM6.42266 10.4618V12.4894H8.45031V10.4618H6.42266ZM10.478 6.40645V8.43411H12.5056V6.40645H10.478ZM10.478 10.4618V12.4894H12.5056V10.4618H10.478Z"
          fill="currentColor"
        />
        <path
          d="M20.6162 22.4249H17.9803V7.623H19.6023C20.6102 7.623 21.4272 8.44003 21.4272 9.44788V21.6138C21.4272 22.0617 21.0641 22.4249 20.6162 22.4249Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCondoFill);
export default ForwardRef;
