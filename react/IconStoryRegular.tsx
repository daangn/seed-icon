import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconStoryRegular = (
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
    data-seed-icon-version="0.4.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M15.35 9.79023L10.88 7.21023C10.48 6.98023 9.97995 6.98023 9.57995 7.21023C9.17995 7.44023 8.92995 7.87023 8.92995 8.34023V13.5102C8.92995 13.9702 9.17995 14.4002 9.57995 14.6402C9.77995 14.7602 9.99995 14.8102 10.23 14.8102C10.46 14.8102 10.68 14.7502 10.88 14.6402L15.35 12.0602C15.75 11.8302 16 11.4002 16 10.9302C16 10.4702 15.75 10.0402 15.35 9.80023V9.79023ZM10.53 12.9802V8.85023L14.1 10.9102L10.53 12.9702V12.9802Z"
          fill="currentColor"
        />
        <path
          d="M21.76 6.24023C21.35 5.00023 20.43 3.98023 19.09 3.29023C17.1 2.26023 14.72 1.74023 12 1.74023C9.27995 1.74023 6.88995 2.26023 4.90995 3.29023C3.56995 3.98023 2.64995 5.00023 2.23995 6.24023C1.86995 7.36023 1.69995 9.46023 1.69995 10.9402C1.69995 12.4202 1.86995 14.5202 2.23995 15.6402C2.55995 16.6002 3.17995 17.4202 4.09995 18.0802V20.8302C4.09995 21.2902 4.34995 21.7202 4.74995 21.9602C4.94995 22.0802 5.16995 22.1302 5.39995 22.1302C5.62995 22.1302 5.84995 22.0702 6.04995 21.9602L9.45995 19.9902C10.27 20.1002 11.13 20.1602 12 20.1602C14.72 20.1602 17.11 19.6402 19.09 18.6102C20.43 17.9202 21.35 16.9002 21.76 15.6602C22.13 14.5402 22.2999 12.4402 22.2999 10.9602C22.2999 9.48023 22.13 7.39023 21.76 6.26023V6.24023ZM20.24 15.1302C19.9599 15.9802 19.33 16.6602 18.36 17.1602C16.6 18.0702 14.47 18.5302 12 18.5302C11.11 18.5302 10.24 18.4702 9.41995 18.3402L9.13995 18.3002L5.68995 20.2902V17.1902L5.30995 16.9602C4.51995 16.4702 3.98995 15.8502 3.74995 15.1302C3.48995 14.3402 3.28995 12.5402 3.28995 10.9402C3.28995 9.34023 3.48995 7.54023 3.74995 6.75023C4.02995 5.90023 4.65995 5.22023 5.62995 4.72023C7.38995 3.81023 9.51995 3.35023 11.99 3.35023C14.46 3.35023 16.59 3.81023 18.35 4.72023C19.32 5.22023 19.9499 5.91023 20.2299 6.75023C20.49 7.54023 20.69 9.34023 20.69 10.9402C20.69 12.5402 20.49 14.3402 20.2299 15.1302H20.24Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconStoryRegular);
export default ForwardRef;
