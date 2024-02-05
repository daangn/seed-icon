import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSortThin = (
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
      <g>
        <path
          d="M11.5759 14.2423C11.8102 14.008 12.1901 14.008 12.4244 14.2423C12.6587 14.4767 12.6587 14.8566 12.4244 15.0909L8.42441 19.0909C8.1901 19.3252 7.8102 19.3252 7.57588 19.0909L3.57588 15.0909C3.34157 14.8566 3.34157 14.4767 3.57588 14.2423C3.8102 14.008 4.1901 14.008 4.42441 14.2423L7.40015 17.2181L7.40015 5.3334C7.40015 5.00203 7.66878 4.7334 8.00015 4.7334C8.33152 4.7334 8.60015 5.00203 8.60015 5.3334L8.60015 17.2181L11.5759 14.2423Z"
          fill="currentColor"
        />
        <path
          d="M12.4242 9.75766C12.1899 9.99198 11.81 9.99198 11.5757 9.75766C11.3414 9.52335 11.3414 9.14345 11.5757 8.90914L15.5683 4.91656C15.6774 4.80355 15.8305 4.73327 16 4.73327C16.1694 4.73327 16.3225 4.80353 16.4316 4.91651L20.4242 8.90914C20.6585 9.14345 20.6585 9.52335 20.4242 9.75766C20.1899 9.99198 19.81 9.99198 19.5757 9.75766L16.6 6.78193V18.6666C16.6 18.998 16.3313 19.2666 16 19.2666C15.6686 19.2666 15.4 18.998 15.4 18.6666V6.78193L12.4242 9.75766Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSortThin);
export default ForwardRef;
