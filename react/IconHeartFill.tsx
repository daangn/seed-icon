import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHeartFill = (
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
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M2.79726 4.80739C5.11177 2.39754 8.90702 2.39754 11.2215 4.80739L11.2224 4.80827L11.9872 5.60702L12.7529 4.80739C15.0674 2.39754 18.8626 2.39754 21.1772 4.80739L21.179 4.80935C23.5242 7.26774 23.1318 10.953 21.2363 13.4384L21.2351 13.44C19.3267 15.9292 17.1219 17.9359 15.4019 19.3169C14.5402 20.0088 13.796 20.547 13.2653 20.9135C12.9998 21.0968 12.7875 21.2373 12.6402 21.3328C12.5666 21.3805 12.5092 21.417 12.4695 21.442L12.4235 21.4708L12.4109 21.4786L12.4072 21.4809L12.406 21.4816C12.1538 21.6362 11.8358 21.6393 11.5809 21.4892L11.5792 21.4882L11.5754 21.4859L11.5621 21.478L11.5142 21.4491C11.4729 21.424 11.4132 21.3875 11.3368 21.3396C11.184 21.244 10.964 21.1033 10.6902 20.9197C10.1426 20.5527 9.37805 20.0137 8.50199 19.3205C6.75443 17.9378 4.54128 15.9246 2.72667 13.423L2.72566 13.4216C0.930009 10.935 0.438148 7.26368 2.79726 4.80739Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHeartFill);
export default ForwardRef;
