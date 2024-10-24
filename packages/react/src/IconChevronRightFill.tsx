/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChevronRightFill = (
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
        d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChevronRightFill);
export default ForwardRef;
