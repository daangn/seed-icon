import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCouponUsedRegular = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.19995 3.99995C1.19995 3.55812 1.55812 3.19995 1.99995 3.19995H22C22.4418 3.19995 22.7999 3.55812 22.7999 3.99995V9.05996C22.7999 9.42886 22.5477 9.74993 22.1893 9.83723C21.486 10.0086 20.7999 10.829 20.7999 12C20.7999 13.1709 21.486 13.9913 22.1893 14.1627C22.5477 14.25 22.7999 14.571 22.7999 14.9399V20C22.7999 20.4418 22.4418 20.7999 22 20.7999H1.99995C1.55812 20.7999 1.19995 20.4418 1.19995 20V14.9399C1.19995 14.571 1.4522 14.25 1.81062 14.1627C2.51394 13.9913 3.19995 13.1709 3.19995 12C3.19995 10.829 2.51394 10.0086 1.81062 9.83723C1.4522 9.74993 1.19995 9.42886 1.19995 9.05996V3.99995ZM2.79995 4.79995V8.50341C4.02894 9.10367 4.79995 10.5029 4.79995 12C4.79995 13.497 4.02894 14.8962 2.79995 15.4965V19.2H21.2V15.4965C19.971 14.8962 19.2 13.497 19.2 12C19.2 10.5029 19.971 9.10367 21.2 8.50341V4.79995H2.79995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2323 8.7676C17.5447 9.08002 17.5447 9.58655 17.2323 9.89897L11.899 15.2323C11.5866 15.5447 11.08 15.5447 10.7676 15.2323L8.10093 12.5656C7.78851 12.2532 7.78851 11.7467 8.10093 11.4343C8.41335 11.1218 8.91988 11.1218 9.2323 11.4343L11.3333 13.5352L16.1009 8.7676C16.4134 8.45518 16.9199 8.45518 17.2323 8.7676Z"
          fill="currentColor"
        />
        <path
          d="M7.99995 3.99995H9.33328V6.99995H7.99995V3.99995Z"
          fill="currentColor"
        />
        <path d="M7.99995 17H9.33328V20H7.99995V17Z" fill="currentColor" />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCouponUsedRegular);
export default ForwardRef;
