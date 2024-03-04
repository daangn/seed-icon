import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconExpandMoreThin = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.07564 7.17574C3.30995 6.94142 3.68985 6.94142 3.92417 7.17574L11.9999 15.2515L20.0756 7.17574C20.31 6.94142 20.6899 6.94142 20.9242 7.17574C21.1585 7.41005 21.1585 7.78995 20.9242 8.02426L12.4242 16.5243C12.1899 16.7586 11.81 16.7586 11.5756 16.5243L3.07564 8.02426C2.84132 7.78995 2.84132 7.41005 3.07564 7.17574Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconExpandMoreThin);
export default ForwardRef;
