/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPercentFill = (
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
          d="M20.4071 3.54289C20.7976 3.93342 20.7976 4.56658 20.4071 4.95711L4.90706 20.4571C4.51653 20.8476 3.88337 20.8476 3.49284 20.4571C3.10232 20.0666 3.10232 19.4334 3.49284 19.0429L18.9928 3.54289C19.3834 3.15237 20.0165 3.15237 20.4071 3.54289Z"
          fill="currentColor"
        />
        <path
          d="M7.33333 10.6667C9.17428 10.6667 10.6667 9.17428 10.6667 7.33333C10.6667 5.49238 9.17428 4 7.33333 4C5.49238 4 4 5.49238 4 7.33333C4 9.17428 5.49238 10.6667 7.33333 10.6667Z"
          fill="currentColor"
        />
        <path
          d="M19.9999 16.6668C19.9999 18.5078 18.5075 20.0002 16.6666 20.0002C14.8256 20.0002 13.3333 18.5078 13.3333 16.6668C13.3333 14.8259 14.8256 13.3335 16.6666 13.3335C18.5075 13.3335 19.9999 14.8259 19.9999 16.6668Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPercentFill);
export default ForwardRef;
