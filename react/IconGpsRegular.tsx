import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconGpsRegular = (
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
          d="M16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12ZM15.15 12C15.15 13.7397 13.7397 15.15 12 15.15C10.2603 15.15 8.85 13.7397 8.85 12C8.85 10.2603 10.2603 8.85 12 8.85C13.7397 8.85 15.15 10.2603 15.15 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7627 1.51271C12.7627 1.09148 12.4212 0.75 12 0.75C11.5788 0.75 11.2373 1.09148 11.2373 1.51271V2.68746C6.68546 3.05521 3.05521 6.68546 2.68746 11.2373H1.51271C1.09148 11.2373 0.75 11.5788 0.75 12C0.75 12.4212 1.09148 12.7627 1.51271 12.7627H2.68746C3.05521 17.3145 6.68546 20.9448 11.2373 21.3125V22.4873C11.2373 22.9085 11.5788 23.25 12 23.25C12.4212 23.25 12.7627 22.9085 12.7627 22.4873L12.7627 21.3125C17.3145 20.9448 20.9448 17.3145 21.3125 12.7627L22.4873 12.7627C22.9085 12.7627 23.25 12.4212 23.25 12C23.25 11.5788 22.9085 11.2373 22.4873 11.2373H21.3125C20.9448 6.68546 17.3145 3.05521 12.7627 2.68746V1.51271ZM4.1822 12C4.1822 7.68235 7.68235 4.1822 12 4.1822C16.3176 4.1822 19.8178 7.68235 19.8178 12C19.8178 16.3176 16.3176 19.8178 12 19.8178C7.68235 19.8178 4.1822 16.3176 4.1822 12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconGpsRegular);
export default ForwardRef;
