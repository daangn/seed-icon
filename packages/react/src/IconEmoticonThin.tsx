/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconEmoticonThin = (
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
      <g>
        <path
          d="M8.58837 13.8826C8.52338 13.5577 8.20728 13.3469 7.88235 13.4119C7.55741 13.4769 7.34668 13.793 7.41167 14.1179C7.63346 15.2269 8.90909 17.1003 12 17.1003C15.0909 17.1003 16.3666 15.2269 16.5884 14.1179C16.6534 13.793 16.4426 13.4769 16.1177 13.4119C15.7928 13.3469 15.4767 13.5577 15.4117 13.8826C15.3001 14.4403 14.5091 15.9003 12 15.9003C9.49095 15.9003 8.69991 14.4403 8.58837 13.8826Z"
          fill="currentColor"
        />
        <path
          d="M9.69995 10.4502C9.69995 11.1406 9.14031 11.7002 8.44995 11.7002C7.7596 11.7002 7.19995 11.1406 7.19995 10.4502C7.19995 9.75984 7.7596 9.2002 8.44995 9.2002C9.14031 9.2002 9.69995 9.75984 9.69995 10.4502Z"
          fill="currentColor"
        />
        <path
          d="M15.55 11.7002C16.2404 11.7002 16.8 11.1406 16.8 10.4502C16.8 9.75984 16.2404 9.2002 15.55 9.2002C14.8597 9.2002 14.3 9.75984 14.3 10.4502C14.3 11.1406 14.8597 11.7002 15.55 11.7002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM3.4002 12.0002C3.4002 7.25055 7.25055 3.4002 12.0002 3.4002C16.7498 3.4002 20.6002 7.25055 20.6002 12.0002C20.6002 16.7498 16.7498 20.6002 12.0002 20.6002C7.25055 20.6002 3.4002 16.7498 3.4002 12.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconEmoticonThin);
export default ForwardRef;
