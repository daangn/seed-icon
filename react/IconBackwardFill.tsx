import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconBackwardFill = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7071 3.29289C13.0976 3.68342 13.0976 4.31658 12.7071 4.70711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L12.7071 19.2929C13.0976 19.6834 13.0976 20.3166 12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconBackwardFill);
export default ForwardRef;
