import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconBillThin = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9999 3.2C4.2267 3.2 3.5999 3.8268 3.5999 4.6V21.3226L5.4982 19.7477C5.91868 19.3989 6.53148 19.4115 6.93722 19.7774L8.88839 21.5369C9.04312 21.6765 9.27905 21.6738 9.43066 21.5309L11.2453 19.8201C11.6691 19.4206 12.3307 19.4206 12.7545 19.8201L14.5691 21.5309C14.7208 21.6738 14.9567 21.6765 15.1114 21.5369L17.0626 19.7774C17.4683 19.4115 18.0811 19.3989 18.5016 19.7477L20.3999 21.3226V4.6C20.3999 3.8268 19.7731 3.2 18.9999 3.2H4.9999ZM2.3999 4.6C2.3999 3.16406 3.56396 2 4.9999 2H18.9999C20.4358 2 21.5999 3.16406 21.5999 4.6V21.5355C21.5999 22.467 20.5145 22.9769 19.7976 22.3821L17.802 20.7265L15.915 22.4281C15.2961 22.9862 14.3524 22.9758 13.746 22.4041L11.9999 20.7579L10.2538 22.4041C9.64741 22.9758 8.70369 22.9862 8.08476 22.4281L6.19783 20.7265L4.20225 22.3821C3.48535 22.9769 2.3999 22.467 2.3999 21.5355V4.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.3999 7.6C7.3999 7.26863 7.66853 7 7.9999 7H15.9999C16.3313 7 16.5999 7.26863 16.5999 7.6C16.5999 7.93137 16.3313 8.2 15.9999 8.2H7.9999C7.66853 8.2 7.3999 7.93137 7.3999 7.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.3999 11.6C7.3999 11.2686 7.66853 11 7.9999 11H15.9999C16.3313 11 16.5999 11.2686 16.5999 11.6C16.5999 11.9314 16.3313 12.2 15.9999 12.2H7.9999C7.66853 12.2 7.3999 11.9314 7.3999 11.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.3999 15.6C7.3999 15.2686 7.66853 15 7.9999 15H11.9999C12.3313 15 12.5999 15.2686 12.5999 15.6C12.5999 15.9314 12.3313 16.2 11.9999 16.2H7.9999C7.66853 16.2 7.3999 15.9314 7.3999 15.6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconBillThin);
export default ForwardRef;
