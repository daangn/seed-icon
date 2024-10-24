/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDirectionRegular = (
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
        d="M16.1657 2.23431C15.8533 1.9219 15.3468 1.9219 15.0344 2.23431C14.7219 2.54673 14.7219 3.05327 15.0344 3.36569L18.6685 6.99984L7.60005 7.00039C4.94908 7.00039 2.80005 9.14942 2.80005 11.8004V21.8004C2.80005 22.2422 3.15822 22.6004 3.60005 22.6004C4.04188 22.6004 4.40005 22.2422 4.40005 21.8004V11.8004C4.40005 10.0331 5.83274 8.60039 7.60005 8.60039L18.6688 8.59984L15.0344 12.2343C14.7219 12.5467 14.7219 13.0533 15.0344 13.3657C15.3468 13.6781 15.8533 13.6781 16.1657 13.3657L21.1657 8.36569C21.4782 8.05327 21.4782 7.54673 21.1657 7.23431L16.1657 2.23431Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDirectionRegular);
export default ForwardRef;
