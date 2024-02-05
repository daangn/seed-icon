import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconGpsFill = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12ZM14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9501 1.54998C12.9501 1.02531 12.5248 0.599976 12.0001 0.599976C11.4754 0.599976 11.0501 1.02531 11.0501 1.54998V2.54688C6.5619 2.9925 2.99262 6.56178 2.547 11.05H1.5501C1.02543 11.05 0.600098 11.4753 0.600098 12C0.600098 12.5246 1.02543 12.95 1.5501 12.95H2.547C2.99262 17.4382 6.5619 21.0075 11.0501 21.4531V22.45C11.0501 22.9746 11.4754 23.4 12.0001 23.4C12.5248 23.4 12.9501 22.9746 12.9501 22.45V21.4531C17.4383 21.0075 21.0076 17.4382 21.4532 12.95H22.4501C22.9748 12.95 23.4001 12.5246 23.4001 12C23.4001 11.4753 22.9748 11.05 22.4501 11.05H21.4532C21.0076 6.56178 17.4383 2.9925 12.9501 2.54688V1.54998ZM4.4001 12C4.4001 7.80261 7.80273 4.39998 12.0001 4.39998C16.1975 4.39998 19.6001 7.80261 19.6001 12C19.6001 16.1973 16.1975 19.6 12.0001 19.6C7.80273 19.6 4.4001 16.1973 4.4001 12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconGpsFill);
export default ForwardRef;
