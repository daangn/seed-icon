/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconProductFill = (
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
    data-seed-icon-version="0.7.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.19995 6.05C7.19995 3.39903 9.34898 1.25 12 1.25C14.6509 1.25 16.8 3.39903 16.8 6.05V6.0835H17.9271C18.9245 6.0835 19.7695 6.81841 19.9078 7.8062L21.6811 19.4729C21.8495 20.676 20.9153 21.7501 19.7004 21.7501H4.29943C3.08459 21.7501 2.15032 20.676 2.31875 19.4729L4.09208 7.8062C4.23038 6.8184 5.07534 6.0835 6.07277 6.0835H7.19995V6.05ZM15.2 6.05V6.0835H8.79995V6.05C8.79995 4.28269 10.2326 2.85 12 2.85C13.7673 2.85 15.2 4.28269 15.2 6.05ZM7.99995 9.85C8.44178 9.85 8.79995 9.49183 8.79995 9.05C8.79995 8.60817 8.44178 8.25 7.99995 8.25C7.55812 8.25 7.19995 8.60817 7.19995 9.05C7.19995 9.49183 7.55812 9.85 7.99995 9.85ZM16 9.85C16.4418 9.85 16.8 9.49183 16.8 9.05C16.8 8.60817 16.4418 8.25 16 8.25C15.5581 8.25 15.2 8.60817 15.2 9.05C15.2 9.49183 15.5581 9.85 16 9.85Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconProductFill);
export default ForwardRef;
