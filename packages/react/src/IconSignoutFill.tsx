/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSignoutFill = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6054 7.35539C15.9959 6.96487 16.6291 6.96487 17.0196 7.35539L20.9571 11.2929C21.3476 11.6834 21.3476 12.3166 20.9571 12.7071L17.0196 16.6446C16.6291 17.0351 15.9959 17.0351 15.6054 16.6446C15.2149 16.2541 15.2149 15.6209 15.6054 15.2304L18.8358 12L15.6054 8.76961C15.2149 8.37908 15.2149 7.74592 15.6054 7.35539Z"
          fill="currentColor"
        />
        <path
          d="M10 5H5V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H4.75C4.29563 21 3.85391 20.8253 3.52352 20.5049C3.19209 20.1835 3 19.7409 3 19.2727V4.72727C3 4.25907 3.19209 3.8165 3.52352 3.49511C3.85391 3.17474 4.29563 3 4.75 3H10C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5Z"
          fill="currentColor"
        />
        <path
          d="M8.75 11C8.19772 11 7.75 11.4477 7.75 12C7.75 12.5523 8.19772 13 8.75 13H20.25C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11H8.75Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSignoutFill);
export default ForwardRef;
