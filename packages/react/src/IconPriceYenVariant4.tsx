/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPriceYenVariant4 = (
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
        d="M6.6396 2.44019C6.33047 2.08689 5.79348 2.05109 5.44019 2.36022C5.08689 2.66935 5.05109 3.20635 5.36022 3.55964L9.6892 9.6499H5.9999C5.53046 9.6499 5.1499 10.0305 5.1499 10.4999C5.1499 10.9693 5.53046 11.3499 5.9999 11.3499H10.6499V13.6499H5.9999C5.53046 13.6499 5.1499 14.0305 5.1499 14.4999C5.1499 14.9693 5.53046 15.3499 5.9999 15.3499H10.6499V20.9999C10.6499 21.4694 11.0305 21.8499 11.4999 21.8499C11.9694 21.8499 12.3499 21.4694 12.3499 20.9999V15.3499H16.9999C17.4693 15.3499 17.8499 14.9693 17.8499 14.4999C17.8499 14.0305 17.4693 13.6499 16.9999 13.6499H12.3499V11.3499H16.9999C17.4693 11.3499 17.8499 10.9693 17.8499 10.4999C17.8499 10.0305 17.4693 9.6499 16.9999 9.6499H13.3106L17.6396 3.55964C17.9487 3.20635 17.9129 2.66935 17.5596 2.36022C17.2064 2.05109 16.6694 2.08689 16.3602 2.44019L11.4999 9.13769L6.6396 2.44019Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPriceYenVariant4);
export default ForwardRef;
