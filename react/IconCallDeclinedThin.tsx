import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCallDeclinedThin = (
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
    data-seed-icon-version="0.6.1"
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
          d="M3.6729 1.8999C3.15609 1.8999 2.62665 2.19232 2.41991 2.74185C1.89972 4.1245 1.89984 5.7245 1.8999 6.545L1.89991 6.57133C1.89991 15.1475 8.85228 22.0999 17.4285 22.0999H17.4548C18.2753 22.1 19.8753 22.1001 21.258 21.5799C21.8075 21.3732 22.0999 20.8437 22.0999 20.3269V14.9142C22.0999 14.4724 21.7417 14.1142 21.2999 14.1142H16.2784C15.9867 14.1142 15.7069 14.2301 15.5006 14.4364L13.8761 16.0609C13.0673 15.7725 11.6258 15.1691 10.4258 13.9692C8.89904 12.4424 8.23588 10.935 7.9411 10.1264L9.59369 8.50356C9.80432 8.29672 9.92298 8.0139 9.92298 7.7187V2.6999C9.92298 2.25808 9.56481 1.8999 9.12298 1.8999H3.6729ZM3.54305 3.1644C3.54775 3.1519 3.55681 3.13844 3.57702 3.12551C3.5989 3.11151 3.63218 3.0999 3.6729 3.0999H8.72298V7.67674L6.82952 9.53608C6.66596 9.69669 6.60821 9.93646 6.6807 10.1539C6.91899 10.8688 7.59575 12.8362 9.57729 14.8177C11.1908 16.4312 13.1568 17.0894 13.8459 17.3191C14.0615 17.391 14.2992 17.3349 14.4599 17.1742L16.3199 15.3142H20.8999V20.3269C20.8999 20.3676 20.8883 20.4009 20.8743 20.4228C20.8614 20.443 20.8479 20.4521 20.8354 20.4568C19.673 20.8941 18.2698 20.8999 17.4285 20.8999C9.51502 20.8999 3.09991 14.4848 3.09991 6.57133C3.09991 5.72996 3.10571 4.32685 3.54305 3.1644Z"
          fill="currentColor"
        />
        <path
          d="M15.4242 3.57564C15.1899 3.34132 14.81 3.34132 14.5756 3.57564C14.3413 3.80995 14.3413 4.18985 14.5756 4.42417L16.6514 6.4999L14.5756 8.57564C14.3413 8.80995 14.3413 9.18985 14.5756 9.42417C14.81 9.65848 15.1899 9.65848 15.4242 9.42417L17.4999 7.34843L19.5756 9.42417C19.81 9.65848 20.1899 9.65848 20.4242 9.42417C20.6585 9.18985 20.6585 8.80995 20.4242 8.57564L18.3484 6.4999L20.4242 4.42417C20.6585 4.18985 20.6585 3.80995 20.4242 3.57564C20.1899 3.34132 19.81 3.34132 19.5756 3.57564L17.4999 5.65137L15.4242 3.57564Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCallDeclinedThin);
export default ForwardRef;
