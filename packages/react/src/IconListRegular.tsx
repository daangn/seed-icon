/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListRegular = (
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
          d="M4.19995 7C4.75224 7 5.19995 6.55228 5.19995 6C5.19995 5.44772 4.75224 5 4.19995 5C3.64767 5 3.19995 5.44772 3.19995 6C3.19995 6.55228 3.64767 7 4.19995 7Z"
          fill="currentColor"
        />
        <path
          d="M8.3 5.2002C7.85817 5.2002 7.5 5.55837 7.5 6.0002C7.5 6.44202 7.85817 6.8002 8.3 6.8002H20.4C20.8418 6.8002 21.2 6.44202 21.2 6.0002C21.2 5.55837 20.8418 5.2002 20.4 5.2002H8.3Z"
          fill="currentColor"
        />
        <path
          d="M8.3 11.2002C7.85817 11.2002 7.5 11.5584 7.5 12.0002C7.5 12.442 7.85817 12.8002 8.3 12.8002H20.4C20.8418 12.8002 21.2 12.442 21.2 12.0002C21.2 11.5584 20.8418 11.2002 20.4 11.2002H8.3Z"
          fill="currentColor"
        />
        <path
          d="M7.5 18.0002C7.5 17.5584 7.85817 17.2002 8.3 17.2002H20.4C20.8418 17.2002 21.2 17.5584 21.2 18.0002C21.2 18.442 20.8418 18.8002 20.4 18.8002H8.3C7.85817 18.8002 7.5 18.442 7.5 18.0002Z"
          fill="currentColor"
        />
        <path
          d="M5.19995 12C5.19995 12.5523 4.75224 13 4.19995 13C3.64767 13 3.19995 12.5523 3.19995 12C3.19995 11.4477 3.64767 11 4.19995 11C4.75224 11 5.19995 11.4477 5.19995 12Z"
          fill="currentColor"
        />
        <path
          d="M4.19995 19C4.75224 19 5.19995 18.5523 5.19995 18C5.19995 17.4477 4.75224 17 4.19995 17C3.64767 17 3.19995 17.4477 3.19995 18C3.19995 18.5523 3.64767 19 4.19995 19Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListRegular);
export default ForwardRef;
