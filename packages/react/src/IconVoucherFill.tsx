/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVoucherFill = (
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
    data-seed-icon-version="0.7.2"
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
          d="M6.33128 2.20848C6.93997 1.64376 7.76812 1.25265 8.69509 1.30469C9.63491 1.35744 10.5551 1.85846 11.3493 2.84496C11.6151 3.17506 11.8285 3.52486 11.9999 3.88297C12.1713 3.52486 12.3847 3.17506 12.6505 2.84496C13.4447 1.85846 14.3649 1.35744 15.3047 1.30469C16.2317 1.25265 17.0598 1.64376 17.6685 2.20848C18.2301 2.72945 18.6657 3.47012 18.6981 4.3496C18.7309 5.2422 18.3442 6.15778 17.4893 7.00731C17.3846 7.11137 17.2725 7.20881 17.1544 7.30006L20.9998 7.30006C21.9387 7.30006 22.6998 8.06117 22.6998 9.00006V12.0001C22.6998 12.9326 21.9489 13.6898 21.0187 13.7H2.98116C2.05087 13.69 1.2998 12.9327 1.2998 12.0001V9.00005C1.2998 8.06117 2.06092 7.30005 2.9998 7.30005L6.84537 7.30005C6.72733 7.20881 6.61522 7.11137 6.5105 7.00731C5.65557 6.15778 5.26889 5.2422 5.30173 4.3496C5.33408 3.47012 5.76975 2.72945 6.33128 2.20848ZM16.7163 3.2348C16.326 2.87263 15.8552 2.67599 15.3832 2.70249C14.924 2.72826 14.3455 2.97203 13.741 3.72291C12.9051 4.7611 12.7395 6.10966 12.7075 7.26922C13.1856 7.23106 13.7559 7.1542 14.3258 7.02068C15.2422 6.80593 16.0434 6.47039 16.5025 6.01423C17.1462 5.37458 17.3144 4.81911 17.299 4.40106C17.2832 3.96988 17.0676 3.56067 16.7163 3.2348ZM8.61663 2.70249C8.1446 2.67599 7.67383 2.87263 7.28347 3.2348C6.93223 3.56067 6.71664 3.96988 6.70078 4.40106C6.6854 4.81911 6.85359 5.37458 7.4973 6.01423C7.95636 6.47039 8.75757 6.80593 9.67405 7.02068C10.2439 7.1542 10.8142 7.23106 11.2923 7.26922C11.2604 6.10966 11.0947 4.7611 10.2588 3.72291C9.65432 2.97203 9.07581 2.72826 8.61663 2.70249ZM10.6998 8.70005L10.6998 12.3001H13.2998L13.2998 8.70005L12.0206 8.70005L11.9998 8.70008L11.9794 8.70005H10.6998Z"
          fill="currentColor"
        />
        <path
          d="M3.2998 14.96L3.29981 21.0001C3.29981 21.9389 4.06092 22.7001 4.99981 22.7001H9.99858L9.99981 22.7001H18.9998C19.9387 22.7001 20.6998 21.9389 20.6998 21.0001L20.6998 14.96H13.2998L13.2998 21.3001H10.6998L10.6998 14.96H3.2998Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVoucherFill);
export default ForwardRef;
