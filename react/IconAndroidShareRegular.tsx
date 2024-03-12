import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconAndroidShareRegular = (
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
    data-seed-icon-version="0.5.8"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2002 5.49995C15.2002 3.67741 16.6777 2.19995 18.5002 2.19995C20.3227 2.19995 21.8002 3.67741 21.8002 5.49995C21.8002 7.32249 20.3227 8.79995 18.5002 8.79995C17.5813 8.79995 16.7502 8.42439 16.1518 7.8184L8.76439 11.5121C8.78798 11.6713 8.8002 11.8342 8.8002 12C8.8002 12.1657 8.78798 12.3286 8.76439 12.4878L16.1518 16.1815C16.7502 15.5755 17.5813 15.2 18.5002 15.2C20.3227 15.2 21.8002 16.6774 21.8002 18.5C21.8002 20.3225 20.3227 21.7999 18.5002 21.7999C16.6777 21.7999 15.2002 20.3225 15.2002 18.5C15.2002 18.1742 15.2474 17.8594 15.3354 17.5621L8.14877 13.9688C7.54724 14.7767 6.58483 15.3 5.5002 15.3C3.67766 15.3 2.2002 13.8225 2.2002 12C2.2002 10.1774 3.67766 8.69995 5.5002 8.69995C6.58482 8.69995 7.54724 9.22322 8.14876 10.0311L15.3354 6.43778C15.2474 6.14051 15.2002 5.82574 15.2002 5.49995ZM18.5002 3.79995C17.5613 3.79995 16.8002 4.56107 16.8002 5.49995C16.8002 6.43884 17.5613 7.19995 18.5002 7.19995C19.4391 7.19995 20.2002 6.43884 20.2002 5.49995C20.2002 4.56107 19.4391 3.79995 18.5002 3.79995ZM18.5002 16.8C17.5613 16.8 16.8002 17.5611 16.8002 18.5C16.8002 19.4388 17.5613 20.2 18.5002 20.2C19.4391 20.2 20.2002 19.4388 20.2002 18.5C20.2002 17.5611 19.4391 16.8 18.5002 16.8ZM3.8002 12C3.8002 11.0611 4.56131 10.3 5.5002 10.3C6.43908 10.3 7.2002 11.0611 7.2002 12C7.2002 12.9388 6.43908 13.7 5.5002 13.7C4.56131 13.7 3.8002 12.9388 3.8002 12Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconAndroidShareRegular);
export default ForwardRef;
