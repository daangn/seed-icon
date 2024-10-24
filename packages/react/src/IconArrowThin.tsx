/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArrowThin = (
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
        d="M18.9335 5.66669C18.9335 5.33532 18.6649 5.06669 18.3335 5.06669L7.00015 5.06665C6.66878 5.06665 6.40015 5.33528 6.40014 5.66665C6.40014 5.99802 6.66877 6.26665 7.00014 6.26665L16.8851 6.26668L5.24239 17.9094C5.00807 18.1437 5.00807 18.5236 5.24239 18.7579C5.4767 18.9922 5.8566 18.9922 6.09091 18.7579L17.7335 7.11531V17C17.7335 17.3314 18.0021 17.6 18.3335 17.6C18.6649 17.6 18.9335 17.3314 18.9335 17V5.66669Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArrowThin);
export default ForwardRef;
