import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCertificationFill = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 0.599976C12.5248 0.599976 12.9501 1.02531 12.9501 1.54998V2.54688C17.4383 2.9925 21.0076 6.56178 21.4532 11.05H22.4501C22.9748 11.05 23.4001 11.4753 23.4001 12C23.4001 12.5246 22.9748 12.95 22.4501 12.95H21.4532C21.0076 17.4382 17.4383 21.0075 12.9501 21.4531V22.45C12.9501 22.9746 12.5248 23.4 12.0001 23.4C11.4754 23.4 11.0501 22.9746 11.0501 22.45V21.4531C6.5619 21.0075 2.99262 17.4382 2.547 12.95H1.5501C1.02543 12.95 0.600098 12.5246 0.600098 12C0.600098 11.4753 1.02543 11.05 1.5501 11.05H2.547C2.99262 6.56178 6.5619 2.9925 11.0501 2.54688V1.54998C11.0501 1.02531 11.4754 0.599976 12.0001 0.599976ZM19.5413 11.05H18.6501C18.1254 11.05 17.7001 11.4753 17.7001 12C17.7001 12.5246 18.1254 12.95 18.6501 12.95H19.5413C19.1126 16.3878 16.3879 19.1125 12.9501 19.5412V18.65C12.9501 18.1253 12.5248 17.7 12.0001 17.7C11.4754 17.7 11.0501 18.1253 11.0501 18.65V19.5412C7.61232 19.1125 4.88758 16.3878 4.4589 12.95H5.3501C5.87477 12.95 6.3001 12.5246 6.3001 12C6.3001 11.4753 5.87477 11.05 5.3501 11.05H4.4589C4.88758 7.61219 7.61232 4.88746 11.0501 4.45877V5.34998C11.0501 5.87465 11.4754 6.29998 12.0001 6.29998C12.5248 6.29998 12.9501 5.87465 12.9501 5.34998V4.45877C16.3879 4.88746 19.1126 7.61219 19.5413 11.05Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCertificationFill);
export default ForwardRef;
