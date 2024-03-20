import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInterestListRegular = (
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
    data-seed-icon-version="0.6.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7628 2.23174C11.15 1.03001 12.8502 1.03001 13.2375 2.23174L15.2412 8.45015H21.4351C22.701 8.45015 23.2202 10.0754 22.1888 10.8094L17.1411 14.4012L19.0847 20.3688C19.475 21.5672 18.1027 22.5641 17.0836 21.8225L12.0001 18.1229L6.9166 21.8225C5.89756 22.5641 4.52524 21.5672 4.91554 20.3688L6.85912 14.4012L1.81145 10.8094C0.780045 10.0754 1.29929 8.45015 2.56517 8.45015H8.75906L10.7628 2.23174ZM12.0001 3.60862L10.2149 9.14886C10.0418 9.68602 9.54195 10.0502 8.97759 10.0502H3.50419L7.96634 13.2254C8.42934 13.5548 8.62469 14.1468 8.44871 14.6872L6.72354 19.9842L11.2352 16.7008C11.6912 16.3689 12.3091 16.3689 12.7651 16.7008L17.2767 19.9842L15.5515 14.6872C15.3756 14.1468 15.5709 13.5548 16.0339 13.2254L20.4961 10.0502H15.0227C14.4583 10.0502 13.9584 9.68602 13.7853 9.14886L12.0001 3.60862Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInterestListRegular);
export default ForwardRef;
