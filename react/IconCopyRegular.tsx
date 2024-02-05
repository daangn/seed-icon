import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCopyRegular = (
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
        d="M17.5 6H19.5C20.6046 6 21.5 6.89543 21.5 8V20C21.5 21.1046 20.6046 22 19.5 22H9.5C8.39543 22 7.5 21.1046 7.5 20V18H4.5C3.39543 18 2.5 17.1046 2.5 16V4C2.5 2.89543 3.39543 2 4.5 2H15.5C16.6046 2 17.5 2.89543 17.5 4V6ZM15.5 3.6H4.5C4.27909 3.6 4.1 3.77909 4.1 4V16C4.1 16.2209 4.27909 16.4 4.5 16.4H7.5V8C7.5 6.89543 8.39543 6 9.5 6H15.9V4C15.9 3.77909 15.7209 3.6 15.5 3.6ZM9.5 7.6H19.5C19.7209 7.6 19.9 7.77909 19.9 8V20C19.9 20.2209 19.7209 20.4 19.5 20.4H9.5C9.27909 20.4 9.1 20.2209 9.1 20V8C9.1 7.77909 9.27909 7.6 9.5 7.6Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCopyRegular);
export default ForwardRef;
