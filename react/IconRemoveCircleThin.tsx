import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRemoveCircleThin = (
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
          d="M8.26442 14.9352C8.04337 15.1563 8.04337 15.5147 8.26442 15.7357C8.48547 15.9568 8.84387 15.9568 9.06492 15.7357L12.0001 12.8006L14.9352 15.7357C15.1563 15.9568 15.5147 15.9568 15.7357 15.7357C15.9568 15.5147 15.9568 15.1563 15.7357 14.9352L12.8006 12.0001L15.7357 9.06492C15.9568 8.84387 15.9568 8.48547 15.7357 8.26442C15.5147 8.04337 15.1563 8.04337 14.9352 8.26442L12.0001 11.1996L9.06492 8.26442C8.84387 8.04337 8.48547 8.04337 8.26442 8.26442C8.04337 8.48547 8.04337 8.84387 8.26442 9.06492L11.1996 12.0001L8.26442 14.9352Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM3.33333 12C3.33333 7.21353 7.21353 3.33333 12 3.33333C16.7865 3.33333 20.6667 7.21353 20.6667 12C20.6667 16.7865 16.7865 20.6667 12 20.6667C7.21353 20.6667 3.33333 16.7865 3.33333 12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRemoveCircleThin);
export default ForwardRef;
