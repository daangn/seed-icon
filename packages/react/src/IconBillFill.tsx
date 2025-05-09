/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconBillFill = (
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
        d="M4.99995 1.80029C3.45355 1.80029 2.19995 3.0539 2.19995 4.60029V21.5358C2.19995 22.6367 3.48276 23.2392 4.33 22.5363L6.19242 20.9912L7.95087 22.5769C8.64717 23.2048 9.70885 23.1931 10.3911 22.5499L12 21.0331L13.6088 22.5499C14.2911 23.1931 15.3527 23.2048 16.049 22.5769L17.8075 20.9912L19.6699 22.5363C20.5171 23.2392 21.7999 22.6367 21.7999 21.5358V4.60029C21.7999 3.0539 20.5463 1.80029 19 1.80029H4.99995ZM7.6 7C7.26863 7 7 7.26863 7 7.6C7 7.93137 7.26863 8.2 7.6 8.2H15.6C15.9314 8.2 16.2 7.93137 16.2 7.6C16.2 7.26863 15.9314 7 15.6 7H7.6ZM7.6 11C7.26863 11 7 11.2686 7 11.6C7 11.9314 7.26863 12.2 7.6 12.2L15.6 12.2C15.9314 12.2 16.2 11.9314 16.2 11.6C16.2 11.2686 15.9314 11 15.6 11H7.6ZM7 15.6C7 15.2686 7.26863 15 7.6 15H11.6C11.9314 15 12.2 15.2686 12.2 15.6C12.2 15.9314 11.9314 16.2 11.6 16.2H7.6C7.26863 16.2 7 15.9314 7 15.6Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconBillFill);
export default ForwardRef;
