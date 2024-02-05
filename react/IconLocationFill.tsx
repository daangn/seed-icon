import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLocationFill = (
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
        d="M2.19995 10.5798C2.19995 5.16739 6.58756 0.779785 12 0.779785C17.4123 0.779785 21.8 5.16739 21.8 10.5798C21.8 13.9799 19.5985 17.1391 17.4217 19.3764C16.3174 20.5113 15.1817 21.4481 14.2536 22.1055C13.7903 22.4337 13.3694 22.6988 13.0225 22.8857C12.8498 22.9788 12.6843 23.0584 12.5339 23.1169C12.4059 23.1666 12.2081 23.2342 12 23.2342C11.7918 23.2342 11.594 23.1666 11.466 23.1169C11.3156 23.0584 11.1501 22.9788 10.9774 22.8857C10.6305 22.6988 10.2096 22.4337 9.74627 22.1055C8.81823 21.4481 7.68247 20.5113 6.57819 19.3764C4.40138 17.1391 2.19995 13.9799 2.19995 10.5798ZM8.38442 10.1041C8.38442 8.10725 10.0031 6.48852 12 6.48852C13.9968 6.48852 15.6155 8.10725 15.6155 10.1041C15.6155 12.1009 13.9968 13.7196 12 13.7196C10.0031 13.7196 8.38442 12.1009 8.38442 10.1041Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLocationFill);
export default ForwardRef;
