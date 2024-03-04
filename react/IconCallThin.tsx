import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCallThin = (
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
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.57701 3.12551C3.55681 3.13844 3.54775 3.1519 3.54305 3.1644C3.10571 4.32685 3.09991 5.72996 3.09991 6.57133C3.09991 14.4848 9.51502 20.8999 17.4285 20.8999C18.2698 20.8999 19.673 20.8941 20.8354 20.4568C20.8479 20.4521 20.8614 20.443 20.8743 20.4228C20.8883 20.4009 20.8999 20.3676 20.8999 20.3269V15.3142H16.3199L14.4599 17.1742C14.2992 17.3349 14.0615 17.391 13.8459 17.3191C13.1568 17.0894 11.1908 16.4312 9.57728 14.8177C7.59575 12.8362 6.91898 10.8688 6.6807 10.1539C6.60821 9.93646 6.66596 9.69669 6.82952 9.53608L8.72298 7.67674V3.0999H3.6729C3.63218 3.0999 3.5989 3.11151 3.57701 3.12551ZM2.41991 2.74185C2.62665 2.19232 3.15609 1.8999 3.6729 1.8999H9.12298C9.56481 1.8999 9.92298 2.25808 9.92298 2.6999V7.7187C9.92298 8.0139 9.80432 8.29672 9.59369 8.50356L7.9411 10.1264C8.23588 10.935 8.89904 12.4424 10.4258 13.9692C11.6258 15.1691 13.0673 15.7725 13.8761 16.0609L15.5006 14.4364C15.7069 14.2301 15.9867 14.1142 16.2784 14.1142H21.2999C21.7417 14.1142 22.0999 14.4724 22.0999 14.9142V20.3269C22.0999 20.8437 21.8075 21.3732 21.258 21.5799C19.8753 22.1001 18.2753 22.1 17.4548 22.0999H17.4285C8.85228 22.0999 1.89991 15.1475 1.89991 6.57133L1.8999 6.54502C1.89984 5.72452 1.89972 4.1245 2.41991 2.74185Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCallThin);
export default ForwardRef;
