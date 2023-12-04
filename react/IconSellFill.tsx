import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSellFill = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.45455C2 4.44208 4.44208 2 7.45455 2H16.5455C19.5579 2 22 4.44208 22 7.45455V16.5455C22 19.5579 19.5579 22 16.5455 22H7.45455C4.44208 22 2 19.5579 2 16.5455V7.45455ZM12.6478 7.37056C12.6478 7.0126 12.3577 6.72241 11.9997 6.72241C11.6417 6.72241 11.3516 7.0126 11.3516 7.37056V11.352H7.37007C7.01211 11.352 6.72192 11.6422 6.72192 12.0002C6.72192 12.3582 7.01211 12.6483 7.37007 12.6483H11.3516V16.6298C11.3516 16.9878 11.6417 17.278 11.9997 17.278C12.3577 17.278 12.6478 16.9878 12.6478 16.6298V12.6483H16.6293C16.9873 12.6483 17.2775 12.3582 17.2775 12.0002C17.2775 11.6422 16.9873 11.352 16.6293 11.352H12.6478V7.37056Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSellFill);
export default ForwardRef;
