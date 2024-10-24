/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNotificationOffRegular = (
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
          d="M4.9998 8.8C4.9998 5.05817 8.05797 2 11.7998 2C13.4836 2 14.9594 2.56319 16.0996 3.4753C16.4446 3.75131 16.5005 4.25475 16.2245 4.59976C15.9485 4.94477 15.4451 5.0007 15.1 4.72469C14.2402 4.03681 13.116 3.6 11.7998 3.6C8.94163 3.6 6.5998 5.94183 6.5998 8.8V13.8C6.5998 13.9548 6.5549 14.1062 6.47056 14.236L5.17056 16.236C4.92976 16.6064 4.43426 16.7115 4.06381 16.4708C3.69336 16.23 3.58825 15.7345 3.82905 15.364L4.9998 13.5628V8.8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7998 8.5C18.2416 8.5 18.5998 8.85817 18.5998 9.3V13.5578L20.4654 16.3562C20.5531 16.4877 20.5998 16.6421 20.5998 16.8V17.8C20.5998 18.2418 20.2416 18.6 19.7998 18.6H14.6V18.8C14.6 20.3418 13.3418 21.6 11.8 21.6C10.2582 21.6 9 20.3418 9 18.8V18.6H8.7998C8.35797 18.6 7.9998 18.2418 7.9998 17.8C7.9998 17.3582 8.35797 17 8.7998 17H18.9717L17.1342 14.2438C17.0466 14.1123 16.9998 13.9579 16.9998 13.8V9.3C16.9998 8.85817 17.358 8.5 17.7998 8.5ZM10.6 18.6H13V18.8C13 19.4582 12.4582 20 11.8 20C11.1418 20 10.6 19.4582 10.6 18.8V18.6Z"
          fill="currentColor"
        />
        <path
          d="M20.3657 4.36569C20.6781 4.05327 20.6781 3.54673 20.3657 3.23431C20.0533 2.9219 19.5467 2.9219 19.2343 3.23431L3.23431 19.2343C2.9219 19.5467 2.9219 20.0533 3.23431 20.3657C3.54673 20.6781 4.05327 20.6781 4.36569 20.3657L20.3657 4.36569Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNotificationOffRegular);
export default ForwardRef;
