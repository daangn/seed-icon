/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarAroundViewRegular = (
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
        d="M3.05112 10.3678C3.05112 9.5239 3.76009 8.52116 5.4445 7.67719C7.07619 6.85964 9.39138 6.32749 11.9966 6.32749C14.6023 6.32749 16.9175 6.85785 18.549 7.67441C20.2325 8.51697 20.942 9.51959 20.942 10.3678C20.942 11.0125 20.5457 11.7385 19.5797 12.4408C18.6229 13.1364 17.2134 13.7209 15.4947 14.0708C15.0224 14.1669 14.7175 14.6277 14.8136 15.1C14.9097 15.5723 15.3706 15.8773 15.8429 15.7811C17.7273 15.3976 19.3907 14.7361 20.6061 13.8526C21.8124 12.9756 22.6875 11.7892 22.6875 10.3678C22.6875 8.50318 21.1999 7.04928 19.3302 6.11353C17.4086 5.15177 14.8147 4.58203 11.9966 4.58203C9.17795 4.58203 6.58405 5.15393 4.6626 6.11666C2.79387 7.05298 1.30566 8.50676 1.30566 10.3678C1.30566 12.1047 2.60689 13.4859 4.27864 14.4128C5.75324 15.2304 7.68033 15.7988 9.82124 16.03L8.11025 17.741C7.76943 18.0818 7.76943 18.6344 8.11025 18.9752C8.45107 19.316 9.00365 19.316 9.34447 18.9752L12.43 15.8897C12.7709 15.5488 12.7709 14.9963 12.43 14.6554L9.34447 11.5699C9.00365 11.2291 8.45107 11.2291 8.11025 11.5699C7.76943 11.9107 7.76943 12.4633 8.11025 12.8041L9.5444 14.2383C7.78378 14.0002 6.25897 13.515 5.12504 12.8863C3.65937 12.0736 3.05112 11.1525 3.05112 10.3678Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarAroundViewRegular);
export default ForwardRef;
