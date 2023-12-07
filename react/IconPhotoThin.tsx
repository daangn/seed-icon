import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoThin = (
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
    data-seed-icon-version="0.5.3"
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
          d="M5.86882 8.80864C5.86882 7.29595 7.0951 6.06967 8.60779 6.06967C10.1205 6.06967 11.3468 7.29595 11.3468 8.80864C11.3468 10.3213 10.1205 11.5476 8.60779 11.5476C7.0951 11.5476 5.86882 10.3213 5.86882 8.80864ZM8.60779 7.27582C7.76124 7.27582 7.07497 7.96209 7.07497 8.80864C7.07497 9.6552 7.76124 10.3415 8.60779 10.3415C9.45434 10.3415 10.1406 9.6552 10.1406 8.80864C10.1406 7.96209 9.45434 7.27582 8.60779 7.27582Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5787 2.19995H6.42173C4.09024 2.19995 2.2002 4.09 2.2002 6.42149V17.5784C2.2002 19.9099 4.09024 21.8 6.42173 21.8H17.5787C19.9101 21.8 21.8002 19.9099 21.8002 17.5784V6.42149C21.8002 4.09 19.9101 2.19995 17.5787 2.19995ZM3.40635 6.42149C3.40635 4.75614 4.75638 3.40611 6.42173 3.40611H17.5787C19.244 3.40611 20.594 4.75614 20.594 6.42149V15.218L16.4471 11.071C16.2115 10.8355 15.8297 10.8355 15.5942 11.071L10.7437 15.9215L8.40602 13.5838C8.17051 13.3483 7.78866 13.3483 7.55314 13.5838L3.40995 17.727C3.40756 17.6778 3.40635 17.6282 3.40635 17.5784V6.42149ZM3.78366 19.0401C4.29817 19.9667 5.28672 20.5938 6.42173 20.5938H17.5787C19.244 20.5938 20.594 19.2438 20.594 17.5784V16.9237L16.0206 12.3503L11.5966 16.7743L13.4317 18.6094C13.6672 18.8449 13.6672 19.2268 13.4317 19.4623C13.1961 19.6978 12.8143 19.6978 12.5788 19.4623L7.97958 14.8631L3.88295 18.9597C3.85214 18.9906 3.81882 19.0173 3.78366 19.0401Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPhotoThin);
export default ForwardRef;
