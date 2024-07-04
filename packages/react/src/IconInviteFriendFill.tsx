/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInviteFriendFill = (
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
    data-seed-icon-version="0.7.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M11.9999 2.1499C12.9896 2.1499 13.9305 2.36722 14.773 2.75662C14.5672 3.12443 14.4499 3.54846 14.4499 3.99989V4.44989H13.9999C12.5916 4.44989 11.4499 5.59156 11.4499 6.99989C11.4499 8.40822 12.5916 9.54989 13.9999 9.54989H14.4499V9.99989C14.4499 11.3827 15.5506 12.5085 16.9237 12.5488C19.9106 14.1867 21.8499 17.4064 21.8499 20.9999C21.8499 21.4693 21.4693 21.8499 20.9999 21.8499H2.9999C2.53046 21.8499 2.1499 21.4693 2.1499 20.9999C2.1499 17.4064 4.1819 14.29 7.16874 12.6521C6.14949 11.5405 5.5249 10.0709 5.5249 8.45445C5.5249 4.94808 8.4487 2.1499 11.9999 2.1499Z"
          fill="currentColor"
        />
        <path
          d="M17.8499 3.9999C17.8499 3.53046 17.4693 3.1499 16.9999 3.1499C16.5305 3.1499 16.1499 3.53046 16.1499 3.9999V6.1499H13.9999C13.5305 6.1499 13.1499 6.53046 13.1499 6.9999C13.1499 7.46934 13.5305 7.8499 13.9999 7.8499H16.1499V9.9999C16.1499 10.4693 16.5305 10.8499 16.9999 10.8499C17.4693 10.8499 17.8499 10.4693 17.8499 9.9999V7.8499H19.9999C20.4693 7.8499 20.8499 7.46934 20.8499 6.9999C20.8499 6.53046 20.4693 6.1499 19.9999 6.1499H17.8499V3.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInviteFriendFill);
export default ForwardRef;
