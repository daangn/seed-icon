import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconAddFill = (
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
      <path
        d="M13.1034 3.10345C13.1034 2.49403 12.6094 2 12 2C11.3906 2 10.8966 2.49403 10.8966 3.10345V10.8966H3.10345C2.49403 10.8966 2 11.3906 2 12C2 12.6094 2.49403 13.1034 3.10345 13.1034H10.8966V20.8966C10.8966 21.506 11.3906 22 12 22C12.6094 22 13.1034 21.506 13.1034 20.8966V13.1034H20.8966C21.506 13.1034 22 12.6094 22 12C22 11.3906 21.506 10.8966 20.8966 10.8966H13.1034V3.10345Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconAddFill);
export default ForwardRef;
