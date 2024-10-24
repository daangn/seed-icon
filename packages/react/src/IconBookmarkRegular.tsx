/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconBookmarkRegular = (
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
        d="M3.19995 2.99995C3.19995 2.55812 3.55812 2.19995 3.99995 2.19995H20C20.4418 2.19995 20.7999 2.55812 20.7999 2.99995V21C20.7999 21.3106 20.6202 21.5931 20.3388 21.7246C20.0574 21.8562 19.7254 21.813 19.487 21.6139L12 15.3582L4.51289 21.6139C4.27454 21.813 3.94246 21.8562 3.6611 21.7246C3.37973 21.5931 3.19995 21.3106 3.19995 21V2.99995ZM4.79995 3.79995V19.289L11.487 13.7018C11.784 13.4537 12.2159 13.4537 12.5129 13.7018L19.2 19.289V3.79995H4.79995Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconBookmarkRegular);
export default ForwardRef;
