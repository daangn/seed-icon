import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArticleFill = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8 1C3.2536 1 2 2.2536 2 3.8V19.8C2 21.3464 3.2536 22.6 4.8 22.6H18.8C20.3464 22.6 21.6 21.3464 21.6 19.8V3.8C21.6 2.2536 20.3464 1 18.8 1H4.8ZM7 5.40005C6.55817 5.40005 6.2 5.75822 6.2 6.20005V9.20005C6.2 9.64188 6.55817 10 7 10H17C17.4418 10 17.8 9.64188 17.8 9.20005V6.20005C17.8 5.75822 17.4418 5.40005 17 5.40005H7ZM6.80022 12.8482C6.46885 12.8482 6.20022 13.1168 6.20022 13.4482C6.20022 13.7795 6.46885 14.0482 6.80022 14.0482L17.1252 14.0482C17.4566 14.0482 17.7252 13.7795 17.7252 13.4482C17.7252 13.1168 17.4566 12.8482 17.1252 12.8482H6.80022ZM6.20032 17.4482C6.20032 17.1168 6.46895 16.8482 6.80032 16.8482H13.4002C13.7316 16.8482 14.0002 17.1168 14.0002 17.4482C14.0002 17.7795 13.7316 18.0482 13.4002 18.0482H6.80032C6.46895 18.0482 6.20032 17.7795 6.20032 17.4482Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArticleFill);
export default ForwardRef;
