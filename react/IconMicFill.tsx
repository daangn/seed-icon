import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMicFill = (
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
          d="M7 5.5V11.5C7 14.2614 9.23859 16.5 12 16.5C14.7614 16.5 17 14.2614 17 11.5V5.5C17 2.73859 14.7614 0.5 12 0.5C9.23859 0.5 7 2.73859 7 5.5Z"
          fill="currentColor"
        />
        <path
          d="M4.8002 11.5C4.8002 11.0582 4.44202 10.7 4.0002 10.7C3.55837 10.7 3.2002 11.0582 3.2002 11.5C3.2002 16.0904 6.715 19.86 11.2002 20.2641V21.7H9.0002C8.55837 21.7 8.2002 22.0582 8.2002 22.5C8.2002 22.9418 8.55837 23.3 9.0002 23.3H15.0002C15.442 23.3 15.8002 22.9418 15.8002 22.5C15.8002 22.0582 15.442 21.7 15.0002 21.7H12.8002V20.2641C17.2854 19.86 20.8002 16.0904 20.8002 11.5C20.8002 11.0582 20.442 10.7 20.0002 10.7C19.5584 10.7 19.2002 11.0582 19.2002 11.5C19.2002 15.4765 15.9766 18.7 12.0002 18.7C8.02375 18.7 4.8002 15.4765 4.8002 11.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMicFill);
export default ForwardRef;
