/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRestaurantFill = (
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
          d="M11.8444 7.9222C11.8444 10.5455 9.98146 12.7337 7.50639 13.236V20.6673C7.50639 21.2196 7.05867 21.6673 6.50639 21.6673H6.33751C5.78522 21.6673 5.33751 21.2196 5.33751 20.6673V13.2359C2.86268 12.7334 1 10.5453 1 7.9222C1 4.9276 3.4276 2.5 6.4222 2.5C9.41679 2.5 11.8444 4.9276 11.8444 7.9222Z"
          fill="currentColor"
        />
        <path
          d="M14.7704 2.8615C15.3227 2.8615 15.7704 3.30921 15.7704 3.8615V7.92222C15.7704 8.02005 15.7759 8.11659 15.7868 8.21153H17.2169V3.86157C17.2169 3.30929 17.6646 2.86157 18.2169 2.86157H18.3858C18.9381 2.86157 19.3858 3.30929 19.3858 3.86157V8.21153H20.8148C20.8256 8.11659 20.8311 8.02005 20.8311 7.92222V3.8615C20.8311 3.30921 21.2788 2.8615 21.8311 2.8615H22C22.5523 2.8615 23 3.30921 23 3.8615V7.92222C23 10.1441 21.458 12.0058 19.3858 12.4956V20.6585C19.3858 21.2108 18.9381 21.6585 18.3858 21.6585H18.2169C17.6646 21.6585 17.2169 21.2108 17.2169 20.6585V12.4959C15.1441 12.0065 13.6015 10.1445 13.6015 7.92222V3.8615C13.6015 3.30921 14.0492 2.8615 14.6015 2.8615H14.7704Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRestaurantFill);
export default ForwardRef;
