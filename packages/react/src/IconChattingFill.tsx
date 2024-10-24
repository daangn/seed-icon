/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChattingFill = (
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
          d="M18.6 9.22047C18.6 13.1692 14.64 16.4409 9.79998 16.4409C7.43469 18.6243 5.0694 19.2427 3.91925 19.4179C3.66913 19.4559 3.51899 19.1339 3.67195 18.9273C4.07568 18.3823 4.70114 17.393 5.39999 15.764C2.76 14.523 1 11.9281 1 9.22047C1 5.27178 4.95999 2 9.79998 2C14.64 2 18.6 5.27178 18.6 9.22047Z"
          fill="currentColor"
        />
        <path
          d="M19.5358 6.07904C19.3043 5.93416 19.0433 6.2056 19.1496 6.46153C19.5047 7.31662 19.7 8.24282 19.7 9.22042C19.7 13.8589 15.3035 17.3403 10.298 17.5583C10.2486 17.5604 10.2011 17.5792 10.1632 17.6118L10.1094 17.6579C9.95174 17.7923 9.98054 18.0508 10.17 18.1314C11.3802 18.6461 12.7361 18.9229 14.2 18.9229C16.5854 21.1248 18.9708 21.794 20.1098 21.9958C20.3556 22.0393 20.5072 21.7355 20.3587 21.5299C19.9564 20.9729 19.3168 19.9628 18.6 18.3588C21.24 17.1178 23 14.5229 23 11.8152C23 9.45375 21.6247 7.38614 19.5358 6.07904Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChattingFill);
export default ForwardRef;
