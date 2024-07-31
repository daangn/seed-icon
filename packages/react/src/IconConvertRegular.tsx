/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConvertRegular = (
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
          d="M9.89913 11.434C10.2116 11.7464 10.2116 12.253 9.89913 12.5654C9.58671 12.8778 9.08018 12.8778 8.76776 12.5654L4.76776 8.56539C4.45534 8.25297 4.45534 7.74644 4.76776 7.43402L8.76776 3.43402C9.08018 3.1216 9.58671 3.1216 9.89913 3.43402C10.2116 3.74644 10.2116 4.25297 9.89913 4.56539L7.26482 7.19971L18.6666 7.19971C19.1084 7.19971 19.4666 7.55788 19.4666 7.99971C19.4666 8.44153 19.1084 8.79971 18.6666 8.79971L7.26482 8.79971L9.89913 11.434Z"
          fill="currentColor"
        />
        <path
          d="M14.1009 12.5658C13.7884 12.2534 13.7884 11.7468 14.1009 11.4344C14.4133 11.122 14.9198 11.122 15.2322 11.4344L19.221 15.4231C19.3725 15.5687 19.4668 15.7734 19.4668 16.0001C19.4668 16.2268 19.3725 16.4315 19.221 16.5771L15.2322 20.5658C14.9198 20.8782 14.4133 20.8782 14.1009 20.5658C13.7884 20.2534 13.7884 19.7468 14.1009 19.4344L16.7352 16.8001H5.33345C4.89162 16.8001 4.53345 16.4419 4.53345 16.0001C4.53345 15.5583 4.89162 15.2001 5.33345 15.2001H16.7352L14.1009 12.5658Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConvertRegular);
export default ForwardRef;
