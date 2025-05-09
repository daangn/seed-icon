/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconEditThin = (
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
        d="M16.5164 2.37935C16.2772 2.14015 15.8894 2.14015 15.6502 2.37935L2.37935 15.6502C2.26448 15.765 2.19995 15.9208 2.19995 16.0833V21.1875C2.19995 21.5257 2.47418 21.7999 2.81245 21.7999H7.91662C8.07906 21.7999 8.23485 21.7354 8.34972 21.6206L21.6206 8.34972C21.8597 8.11052 21.8597 7.72271 21.6206 7.48351L16.5164 2.37935ZM17.1041 11.1337L14.4747 8.50435C14.2355 8.26515 13.8477 8.26515 13.6085 8.50435C13.3693 8.74354 13.3693 9.13136 13.6085 9.37055L16.2379 12L7.66291 20.5749H3.42495V16.337L16.0833 3.67866L20.3212 7.91662L17.1041 11.1337Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconEditThin);
export default ForwardRef;
