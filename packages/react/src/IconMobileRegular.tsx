/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMobileRegular = (
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
          d="M10.875 4.2C10.4332 4.2 10.075 4.55817 10.075 5C10.075 5.44183 10.4332 5.8 10.875 5.8H14.125C14.5668 5.8 14.925 5.44183 14.925 5C14.925 4.55817 14.5668 4.2 14.125 4.2H10.875Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4V20C6 21.1046 6.89543 22 8 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2H8C6.89543 2 6 2.89543 6 4ZM17 3.6H8C7.77909 3.6 7.6 3.77909 7.6 4V19H17.4V4C17.4 3.77909 17.2209 3.6 17 3.6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMobileRegular);
export default ForwardRef;
