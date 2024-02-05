import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCouponUsedFill = (
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
        d="M8 7V3.19995H1.99995C1.55812 3.19995 1.19995 3.55812 1.19995 3.99995V9.05996C1.19995 9.42886 1.4522 9.74993 1.81062 9.83723C2.51394 10.0086 3.19995 10.829 3.19995 12C3.19995 13.1709 2.51394 13.9913 1.81062 14.1627C1.4522 14.25 1.19995 14.571 1.19995 14.9399V20C1.19995 20.4418 1.55812 20.7999 1.99995 20.7999H8V17H9.35V20.7999H22C22.4418 20.7999 22.7999 20.4418 22.7999 20V14.9399C22.7999 14.571 22.5477 14.25 22.1893 14.1627C21.486 13.9913 20.7999 13.1709 20.7999 12C20.7999 10.829 21.486 10.0086 22.1893 9.83723C22.5477 9.74993 22.7999 9.42886 22.7999 9.05996V3.99995C22.7999 3.55812 22.4418 3.19995 22 3.19995H9.35V7H8ZM17.2324 9.89901C17.5448 9.58659 17.5448 9.08006 17.2324 8.76764C16.92 8.45522 16.4134 8.45522 16.101 8.76764L11.3334 13.5353L9.23238 11.4343C8.91997 11.1219 8.41343 11.1219 8.10101 11.4343C7.78859 11.7467 7.78859 12.2533 8.10101 12.5657L10.7677 15.2323C11.0801 15.5448 11.5866 15.5448 11.8991 15.2323L17.2324 9.89901Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCouponUsedFill);
export default ForwardRef;
