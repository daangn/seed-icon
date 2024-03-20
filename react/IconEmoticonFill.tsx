import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconEmoticonFill = (
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
    data-seed-icon-version="0.6.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.2002 12.0002C2.2002 6.5878 6.5878 2.2002 12.0002 2.2002C17.4126 2.2002 21.8002 6.5878 21.8002 12.0002C21.8002 17.4126 17.4126 21.8002 12.0002 21.8002C6.5878 21.8002 2.2002 17.4126 2.2002 12.0002ZM9.8 10.4C9.8 11.1732 9.1732 11.8 8.4 11.8C7.6268 11.8 7 11.1732 7 10.4C7 9.6268 7.6268 9 8.4 9C9.1732 9 9.8 9.6268 9.8 10.4ZM15.6002 11.8C16.3734 11.8 17.0002 11.1732 17.0002 10.4C17.0002 9.6268 16.3734 9 15.6002 9C14.827 9 14.2002 9.6268 14.2002 10.4C14.2002 11.1732 14.827 11.8 15.6002 11.8ZM7.70134 13.2578C8.11124 13.0929 8.57721 13.2915 8.74211 13.7014C9.00636 14.3583 9.52479 14.8576 10.1536 15.1998C10.7881 15.5451 11.482 15.7 11.9999 15.7C13.2647 15.7 14.7174 15.0368 15.2583 13.6999C15.424 13.2903 15.8904 13.0927 16.3 13.2584C16.7096 13.4241 16.9072 13.8905 16.7415 14.3C15.8824 16.4232 13.6952 17.3 11.9999 17.3C11.2078 17.3 10.2518 17.0748 9.38875 16.6052C8.52005 16.1324 7.69347 15.3817 7.25773 14.2986C7.09282 13.8887 7.29144 13.4227 7.70134 13.2578Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconEmoticonFill);
export default ForwardRef;
