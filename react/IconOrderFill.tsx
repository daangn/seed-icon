import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconOrderFill = (
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
          d="M6.80005 6V3.2002H4.8C3.2536 3.2002 2 4.4538 2 6.0002V20.0002C2 21.5466 3.2536 22.8002 4.8 22.8002H18.8C20.3464 22.8002 21.6 21.5466 21.6 20.0002V6.0002C21.6 4.4538 20.3464 3.2002 18.8 3.2002H16.8V6C16.8 6.55228 16.3523 7 15.8 7H7.80005C7.24776 7 6.80005 6.55228 6.80005 6ZM16.4146 11.5119C16.6974 11.1725 16.6516 10.668 16.3122 10.3851C15.9727 10.1023 15.4683 10.1482 15.1854 10.4876L10.6976 15.873L8.31217 13.8851C7.97275 13.6023 7.46829 13.6482 7.18544 13.9876C6.90259 14.327 6.94845 14.8315 7.28787 15.1143L10.2879 17.6143C10.4509 17.7501 10.6611 17.8157 10.8724 17.7964C11.0837 17.7772 11.2788 17.6749 11.4146 17.5119L16.4146 11.5119Z"
          fill="currentColor"
        />
        <path
          d="M8.40015 2.1001V4.9001C8.40015 5.17624 8.624 5.4001 8.90015 5.4001H14.7001C14.9763 5.4001 15.2001 5.17624 15.2001 4.9001V2.1001C15.2001 1.82396 14.9763 1.6001 14.7001 1.6001H8.90015C8.624 1.6001 8.40015 1.82395 8.40015 2.1001Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconOrderFill);
export default ForwardRef;
