/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoEditCropFill = (
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
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V5H2C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H5V18C5 18.5523 5.44772 19 6 19H17V22C17 22.5523 17.4477 23 18 23C18.5523 23 19 22.5523 19 22V19H22C22.5523 19 23 18.5523 23 18C23 17.4477 22.5523 17 22 17H19V6C19 5.44772 18.5523 5 18 5H7V2ZM7 7V17H17V7H7Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPhotoEditCropFill);
export default ForwardRef;
