import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCommunityFill = (
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
          d="M18.0001 2.8999C18.3315 2.8999 18.6001 3.16853 18.6001 3.4999V18.0857C18.6001 18.8321 18.8966 19.5479 19.4244 20.0756C19.533 20.1842 19.6001 20.3342 19.6001 20.4999C19.6001 20.8313 19.3315 21.0999 19.0001 21.0999H4.00015C2.56421 21.0999 1.40015 19.9358 1.40015 18.4999V3.4999C1.40015 3.16853 1.66878 2.8999 2.00015 2.8999H18.0001ZM5.99995 8.3999C5.66858 8.3999 5.39995 8.66853 5.39995 8.9999C5.39995 9.33127 5.66858 9.5999 5.99995 9.5999H13C13.3313 9.5999 13.6 9.33127 13.6 8.9999C13.6 8.66853 13.3313 8.3999 13 8.3999H5.99995ZM5.99995 12.3999C5.66858 12.3999 5.39995 12.6685 5.39995 12.9999C5.39995 13.3313 5.66858 13.5999 5.99995 13.5999H9.99995C10.3313 13.5999 10.6 13.3313 10.6 12.9999C10.6 12.6685 10.3313 12.3999 9.99995 12.3999H5.99995Z"
          fill="currentColor"
        />
        <path
          d="M20.4 7.8999C20.0687 7.8999 19.8 8.16851 19.8 8.49988V18.3001C19.8 19.1837 20.4164 19.9001 21.3 19.9001C22.1837 19.9001 22.6 19.1837 22.6 18.3001V8.49988C22.6 8.16851 22.3314 7.8999 22 7.8999H20.4Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCommunityFill);
export default ForwardRef;
