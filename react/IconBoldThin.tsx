import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconBoldThin = (
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
        d="M6.9999 3.3999C6.66853 3.3999 6.3999 3.66853 6.3999 3.9999V19.9999C6.3999 20.3313 6.66853 20.5999 6.9999 20.5999H13.085C15.5785 20.5999 17.5999 18.5785 17.5999 16.085C17.5999 14.1343 16.4078 12.4621 14.7123 11.7571C15.8552 10.938 16.5999 9.59844 16.5999 8.08501C16.5999 5.4975 14.5023 3.3999 11.9148 3.3999H6.9999ZM7.5999 12.5999V19.3999H13.085C14.9158 19.3999 16.3999 17.9158 16.3999 16.085C16.3999 14.1602 14.8396 12.5999 12.9148 12.5999H7.5999ZM12.085 11.3999C13.9158 11.3999 15.3999 9.91577 15.3999 8.08501C15.3999 6.16024 13.8396 4.5999 11.9148 4.5999H7.5999V11.3999H12.085Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconBoldThin);
export default ForwardRef;
