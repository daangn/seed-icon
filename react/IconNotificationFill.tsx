import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNotificationFill = (
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
          d="M12 2.19995C8.24812 2.19995 5.19995 5.24812 5.19995 8.99995V13.7577L3.33431 16.5562C3.2467 16.6876 3.19995 16.842 3.19995 17V18C3.19995 18.4418 3.55812 18.8 3.99995 18.8H20C20.4418 18.8 20.7999 18.4418 20.7999 18V17C20.7999 16.842 20.7532 16.6876 20.6656 16.5562L18.8 13.7577V8.99995C18.8 5.24812 15.7518 2.19995 12 2.19995Z"
          fill="currentColor"
        />
        <path
          d="M12.0001 21.7999C10.9685 21.7999 10.0729 21.2334 9.58716 20.3999H14.4131C13.9273 21.2334 13.0318 21.7999 12.0001 21.7999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNotificationFill);
export default ForwardRef;
