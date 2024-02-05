import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconAndroidShareFill = (
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
        d="M15.2002 5.49995C15.2002 3.67741 16.6777 2.19995 18.5002 2.19995C20.3227 2.19995 21.8002 3.67741 21.8002 5.49995C21.8002 7.32249 20.3227 8.79995 18.5002 8.79995C17.5813 8.79995 16.7502 8.42439 16.1518 7.8184L8.76439 11.5121C8.78798 11.6713 8.8002 11.8342 8.8002 12C8.8002 12.1657 8.78798 12.3286 8.76439 12.4878L16.1518 16.1815C16.7502 15.5755 17.5813 15.2 18.5002 15.2C20.3227 15.2 21.8002 16.6774 21.8002 18.5C21.8002 20.3225 20.3227 21.7999 18.5002 21.7999C16.6777 21.7999 15.2002 20.3225 15.2002 18.5C15.2002 18.1742 15.2474 17.8594 15.3354 17.5621L8.14877 13.9688C7.54724 14.7767 6.58483 15.3 5.5002 15.3C3.67766 15.3 2.2002 13.8225 2.2002 12C2.2002 10.1774 3.67766 8.69995 5.5002 8.69995C6.58482 8.69995 7.54724 9.22322 8.14876 10.0311L15.3354 6.43778C15.2474 6.14051 15.2002 5.82574 15.2002 5.49995Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconAndroidShareFill);
export default ForwardRef;
