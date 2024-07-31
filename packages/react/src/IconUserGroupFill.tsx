/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconUserGroupFill = (
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
          d="M1.94403 21H5.14422C5.14422 17.694 6.96122 14.8292 9.64745 13.2946C8.35831 12.1084 7.54422 10.4128 7.54422 8.52632C7.54422 6.30652 8.65884 4.35507 10.3594 3.17756C9.90742 3.06167 9.43311 3 8.94403 3C5.84802 3 3.34403 5.47105 3.34403 8.52632C3.34403 10.7053 4.63203 12.5921 6.48803 13.4842C3.58074 14.412 1.39915 16.9269 1.00711 20.0025C0.937273 20.5504 1.39174 21 1.94403 21Z"
          fill="currentColor"
        />
        <path
          d="M17.3998 13.4842C19.2638 12.5842 20.5438 10.7053 20.5438 8.52632C20.5438 5.47105 18.0398 3 14.9438 3C11.8478 3 9.34385 5.47105 9.34385 8.52632C9.34385 10.7053 10.6318 12.5921 12.4878 13.4842C9.58056 14.412 7.39897 16.9269 7.00693 20.0025C6.93709 20.5504 7.39156 21 7.94385 21H21.9438C22.4961 21 22.9506 20.5504 22.8805 20.0025C22.4879 16.9324 20.3066 14.4118 17.3998 13.4842Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconUserGroupFill);
export default ForwardRef;
