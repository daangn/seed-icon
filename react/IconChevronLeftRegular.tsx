import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChevronLeftRegular = (
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
        d="M16.66 3.22988C16.96 3.52988 16.96 4.01988 16.66 4.31988L8.97999 11.9999L16.66 19.6799C16.96 19.9799 16.96 20.4699 16.66 20.7699C16.36 21.0699 15.87 21.0699 15.57 20.7699L7.33999 12.5499C7.03999 12.2499 7.03999 11.7599 7.33999 11.4599L15.56 3.22988C15.86 2.92988 16.35 2.92988 16.65 3.22988H16.66Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChevronLeftRegular);
export default ForwardRef;
