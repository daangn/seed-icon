import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCopyFill = (
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
          d="M4.5 2C3.39543 2 2.5 2.89543 2.5 4V16C2.5 17.1046 3.39543 18 4.5 18H7.3C7.41046 18 7.5 17.9105 7.5 17.8V8C7.5 6.89543 8.39543 6 9.5 6H17.3C17.4105 6 17.5 5.91046 17.5 5.8V4C17.5 2.89543 16.6046 2 15.5 2H4.5Z"
          fill="currentColor"
        />
        <path
          d="M9.5002 7.19995H19.5002C19.942 7.19995 20.3002 7.55812 20.3002 7.99995V20C20.3002 20.4418 19.942 20.8 19.5002 20.8H9.5002C9.05837 20.8 8.7002 20.4418 8.7002 20V7.99995C8.7002 7.55812 9.05837 7.19995 9.5002 7.19995Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCopyFill);
export default ForwardRef;
