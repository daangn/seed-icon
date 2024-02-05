import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconWarningThin = (
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
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M12 7.33333C12.3682 7.33333 12.6667 7.63181 12.6667 8V12.2667C12.6667 12.6349 12.3682 12.9333 12 12.9333C11.6318 12.9333 11.3333 12.6349 11.3333 12.2667V8C11.3333 7.63181 11.6318 7.33333 12 7.33333Z"
          fill="currentColor"
        />
        <path
          d="M13.0669 15.7333C13.0669 16.3224 12.5894 16.8 12.0003 16.8C11.4112 16.8 10.9336 16.3224 10.9336 15.7333C10.9336 15.1442 11.4112 14.6667 12.0003 14.6667C12.5894 14.6667 13.0669 15.1442 13.0669 15.7333Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.33333C7.21353 3.33333 3.33333 7.21353 3.33333 12C3.33333 16.7865 7.21353 20.6667 12 20.6667C16.7865 20.6667 20.6667 16.7865 20.6667 12C20.6667 7.21353 16.7865 3.33333 12 3.33333Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconWarningThin);
export default ForwardRef;
