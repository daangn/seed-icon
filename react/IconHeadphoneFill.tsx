import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHeadphoneFill = (
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
          d="M12 3C6.20101 3 1.5 7.70101 1.5 13.5V18C1.5 18.5523 1.94772 19 2.5 19C3.05228 19 3.5 18.5523 3.5 18V13.5C3.5 8.80558 7.30558 5 12 5C16.6944 5 20.5 8.80558 20.5 13.5V18C20.5 18.5523 20.9477 19 21.5 19C22.0523 19 22.5 18.5523 22.5 18V13.5C22.5 7.70101 17.799 3 12 3Z"
          fill="currentColor"
        />
        <path
          d="M4.7002 14.5C4.7002 14.2239 4.92405 14 5.2002 14H6.7002C7.52862 14 8.2002 14.6716 8.2002 15.5V19.5C8.2002 20.3284 7.52862 21 6.7002 21H5.2002C4.92405 21 4.7002 20.7761 4.7002 20.5V14.5Z"
          fill="currentColor"
        />
        <path
          d="M19.2998 14.5C19.2998 14.2239 19.0759 14 18.7998 14H17.2998C16.4714 14 15.7998 14.6716 15.7998 15.5V19.5C15.7998 20.3284 16.4714 21 17.2998 21H18.7998C19.0759 21 19.2998 20.7761 19.2998 20.5V14.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHeadphoneFill);
export default ForwardRef;
