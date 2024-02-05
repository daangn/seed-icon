import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChallengeFill = (
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
      <path
        d="M19.74 4.419C18.3636 5.45132 17.1087 5.69324 15.8962 5.56781C14.6437 5.43824 13.4165 4.91757 12.0864 4.34751L12.0445 4.32955C10.7614 3.77959 9.37789 3.18661 7.9274 3.03656C6.60385 2.89964 5.2407 3.13056 3.82794 4.01475C3.50178 4.07131 3.2298 4.28588 3.09373 4.57675C3.02398 4.68637 2.99228 4.81539 3.00159 4.94316C3.00053 4.96197 3 4.98092 3 5V16.1494C3 16.1494 3 16.1494 3 16.1494V22.4643C3 23.0166 3.44772 23.4643 4 23.4643C4.55228 23.4643 5 23.0166 5 22.4643V15.9818C5.97963 15.4965 6.90348 15.387 7.80392 15.4802C9.05638 15.6098 10.2836 16.1304 11.6137 16.7005L11.6556 16.7184C12.9387 17.2684 14.3222 17.8614 15.7727 18.0114C17.2789 18.1673 18.8365 17.8467 20.46 16.629C20.6111 16.5157 20.7 16.3379 20.7 16.149V4.899C20.7 4.67173 20.5716 4.46398 20.3684 4.36234C20.1651 4.26071 19.9218 4.28264 19.74 4.419Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChallengeFill);
export default ForwardRef;
