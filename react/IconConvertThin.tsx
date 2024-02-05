import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConvertThin = (
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
          d="M9.75766 11.5759C9.99198 11.8102 9.99198 12.1901 9.75766 12.4244C9.52335 12.6587 9.14345 12.6587 8.90913 12.4244L4.90913 8.42441C4.67482 8.1901 4.67482 7.8102 4.90913 7.57588L8.90913 3.57588C9.14345 3.34157 9.52335 3.34157 9.75766 3.57588C9.99198 3.8102 9.99198 4.1901 9.75766 4.42441L6.78193 7.40015L18.6666 7.40015C18.998 7.40015 19.2666 7.66878 19.2666 8.00015C19.2666 8.33152 18.998 8.60015 18.6666 8.60015L6.78193 8.60015L9.75766 11.5759Z"
          fill="currentColor"
        />
        <path
          d="M14.2423 12.4242C14.008 12.1899 14.008 11.81 14.2423 11.5757C14.4767 11.3414 14.8565 11.3414 15.0909 11.5757L19.0834 15.5683C19.1964 15.6774 19.2667 15.8305 19.2667 16C19.2667 16.1694 19.1965 16.3225 19.0835 16.4316L15.0909 20.4242C14.8565 20.6585 14.4767 20.6585 14.2423 20.4242C14.008 20.1899 14.008 19.81 14.2423 19.5757L17.2181 16.6H5.3334C5.00203 16.6 4.7334 16.3313 4.7334 16C4.7334 15.6686 5.00203 15.4 5.3334 15.4H17.2181L14.2423 12.4242Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConvertThin);
export default ForwardRef;
