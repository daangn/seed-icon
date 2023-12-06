import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChattingSendFill = (
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
    data-seed-icon-version="0.5.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M21.72 11.5521L2.72051 2.04957C2.62072 1.99966 2.51096 1.98968 2.39121 2.00964C2.12179 2.06953 1.95215 2.33903 2.01202 2.60854L3.7084 10.4342C3.80819 10.8634 4.1774 11.1828 4.62644 11.2127L14.8746 11.8915C14.9245 11.8915 14.9644 11.9314 14.9644 11.9813C14.9644 12.0412 14.9245 12.0811 14.8746 12.0911L4.62644 12.7799C4.18738 12.8098 3.80819 13.1292 3.71838 13.5684L2.022 21.394C2.00204 21.5038 2.01202 21.6236 2.06191 21.7234C2.18166 21.973 2.48102 22.0728 2.73049 21.943L21.73 12.4405C21.8298 12.3906 21.9096 12.3107 21.9495 12.2209C22.0692 11.9713 21.9695 11.6719 21.72 11.5521Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChattingSendFill);
export default ForwardRef;
