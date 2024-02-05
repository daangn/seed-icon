import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCalendarFill = (
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
        d="M7.99995 1.78003C8.44178 1.78003 8.79995 2.1382 8.79995 2.58003V3.28003H15.2V2.58003C15.2 2.1382 15.5581 1.78003 16 1.78003C16.4418 1.78003 16.8 2.1382 16.8 2.58003V3.28003H21C21.4418 3.28003 21.8 3.6382 21.8 4.08003V19.23C21.8 20.8869 20.4568 22.23 18.8 22.23H5.19995C3.5431 22.23 2.19995 20.8869 2.19995 19.23V4.08003C2.19995 3.6382 2.55812 3.28003 2.99995 3.28003H7.19995V2.58003C7.19995 2.1382 7.55812 1.78003 7.99995 1.78003ZM15.2 4.88003V5.58003C15.2 6.02186 15.5581 6.38003 16 6.38003C16.4418 6.38003 16.8 6.02186 16.8 5.58003V4.88003H20.2V7.28003H3.79995V4.88003H7.19995V5.58003C7.19995 6.02186 7.55812 6.38003 7.99995 6.38003C8.44178 6.38003 8.79995 6.02186 8.79995 5.58003V4.88003H15.2ZM14.8667 17.1134C14.4248 17.1134 14.0667 17.4716 14.0667 17.9134C14.0667 18.3552 14.4248 18.7134 14.8667 18.7134H17.5333C17.9751 18.7134 18.3333 18.3552 18.3333 17.9134C18.3333 17.4716 17.9751 17.1134 17.5333 17.1134H14.8667Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCalendarFill);
export default ForwardRef;
