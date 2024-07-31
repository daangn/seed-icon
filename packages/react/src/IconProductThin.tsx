/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconProductThin = (
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
    data-seed-icon-version="0.7.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3999 9.30015C15.3999 9.63152 15.6685 9.90015 15.9999 9.90015C16.3313 9.90015 16.5999 9.63152 16.5999 9.30015V7.43355H17.9271C18.3261 7.43355 18.664 7.72751 18.7194 8.12263L18.7214 8.13658L20.4934 19.7947C20.5573 20.2738 20.1845 20.7002 19.7004 20.7002H4.29943C3.81533 20.7002 3.44261 20.2738 3.50642 19.7947L5.27846 8.13658L5.28049 8.12262C5.33581 7.72751 5.67379 7.43355 6.07277 7.43355H7.3999V9.30015C7.3999 9.63152 7.66853 9.90015 7.9999 9.90015C8.33127 9.90015 8.5999 9.63152 8.5999 9.30015V7.43355H15.3999V9.30015ZM16.5999 6.23354H17.9271C18.9245 6.23354 19.7695 6.96845 19.9078 7.95625L21.6811 19.6229C21.8495 20.826 20.9153 21.9002 19.7004 21.9002H4.29943C3.08459 21.9002 2.15032 20.826 2.31875 19.6229L4.09208 7.95625C4.23038 6.96845 5.07534 6.23354 6.07277 6.23354H7.3999V6.2001C7.3999 3.65959 9.45939 1.6001 11.9999 1.6001C14.5404 1.6001 16.5999 3.65959 16.5999 6.2001V6.23354ZM8.5999 6.23354V6.2001C8.5999 4.32233 10.1221 2.8001 11.9999 2.8001C13.8777 2.8001 15.3999 4.32233 15.3999 6.2001V6.23354H8.5999Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconProductThin);
export default ForwardRef;
