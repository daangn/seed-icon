import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArrowDropUpThin = (
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
        d="M11.9998 8.3999C11.8218 8.3999 11.6529 8.479 11.5389 8.61579L6.53891 14.6158C6.38987 14.7946 6.35774 15.0436 6.45649 15.2544C6.55524 15.4652 6.76703 15.5999 6.99985 15.5999L16.9998 15.5999C17.2327 15.5999 17.4445 15.4652 17.5432 15.2544C17.6419 15.0436 17.6098 14.7946 17.4608 14.6158L12.4608 8.61579C12.3468 8.479 12.1779 8.3999 11.9998 8.3999ZM15.7188 14.3999L8.28087 14.3999L11.9998 9.93713L15.7188 14.3999Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArrowDropUpThin);
export default ForwardRef;
