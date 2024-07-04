/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConfirmationProfileFill = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.196 1.18616C11.7022 0.937946 12.2977 0.937945 12.8039 1.18616L20.8039 5.10929C21.4143 5.40863 21.8 6.02126 21.8 6.69149V8.90722C21.8 12.2431 21.0106 15.083 19.4567 17.4244C17.9035 19.7649 15.6216 21.554 12.7242 22.8461C12.2639 23.0514 11.736 23.0502 11.2781 22.8481C8.40389 21.5796 6.11316 19.9451 4.54963 17.6641C2.98407 15.3802 2.19995 12.5248 2.19995 8.90722V6.69149C2.19995 6.02126 2.58564 5.40863 3.19604 5.10929L11.196 1.18616ZM12.9945 11.274C14.366 11.5594 15.6272 12.4339 16.336 13.6674C16.6766 14.2566 16.4833 14.947 15.9125 15.306C14.9092 15.9319 13.4179 16.2173 12.0003 16.2173C10.5827 16.2173 9.08225 15.9411 8.08808 15.306C7.51736 14.947 7.34246 14.2474 7.66464 13.6674C8.36424 12.4339 9.63456 11.5778 11.0061 11.274C10.104 10.8874 9.47807 9.99451 9.47807 8.95431C9.47807 7.5551 10.6103 6.42285 12.0003 6.42285C13.3903 6.42285 14.5225 7.5551 14.5225 8.95431C14.5225 9.99451 13.8966 10.8874 12.9945 11.274Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConfirmationProfileFill);
export default ForwardRef;
