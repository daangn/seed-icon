import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCobuyingFill = (
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
          d="M12.6903 9.80029H9.31278L11.1705 2.72048C11.3065 2.20209 11.8282 1.89445 12.3359 2.03335L13.6489 2.39264C13.9979 2.48814 14.2493 2.76981 14.3282 3.10498C14.3641 3.25732 14.3643 3.42071 14.3218 3.58269L12.6903 9.80029Z"
          fill="currentColor"
        />
        <path
          d="M9.16206 5.64672L8.07223 9.80029H4.60507L4.06532 7.7432C3.79328 6.70642 4.39578 5.64074 5.41102 5.36294L7.11799 4.89586C7.9077 4.67977 8.71453 5.00403 9.16206 5.64672Z"
          fill="currentColor"
        />
        <path
          d="M15.6711 6.19637C17.7984 6.19637 19.5713 7.74607 19.9662 9.80029H13.9309L14.8562 6.2737C15.1203 6.22293 15.3927 6.19637 15.6711 6.19637Z"
          fill="currentColor"
        />
        <path
          d="M2 12.0002C2 11.448 2.44454 11.0002 2.99291 11.0002H21.0071C21.5555 11.0002 22 11.448 22 12.0002V14.0002C22 14.5525 21.5555 15.0002 21.0071 15.0002H2.99291C2.44454 15.0002 2 14.5525 2 14.0002V12.0002Z"
          fill="currentColor"
        />
        <path
          d="M5.40987 16.2002C4.72092 16.2002 4.23833 16.8806 4.4661 17.5308L5.49556 20.4696C5.74301 21.4808 6.72985 22.2002 7.86954 22.2002H16.1305C17.2702 22.2002 18.257 21.4808 18.5044 20.4696L19.5339 17.5308C19.7617 16.8806 19.2791 16.2002 18.5901 16.2002H5.40987Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCobuyingFill);
export default ForwardRef;
