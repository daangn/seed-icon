import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconAddCircleRegular = (
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
          d="M11.9996 6.72231C12.3576 6.72231 12.6478 7.0125 12.6478 7.37046V11.3519H16.6293C16.9872 11.3519 17.2774 11.6421 17.2774 12.0001C17.2774 12.3581 16.9872 12.6482 16.6293 12.6482H12.6478V16.6297C12.6478 16.9877 12.3576 17.2779 11.9996 17.2779C11.6417 17.2779 11.3515 16.9877 11.3515 16.6297V12.6482H7.37001C7.01205 12.6482 6.72186 12.3581 6.72186 12.0001C6.72186 11.6421 7.01205 11.3519 7.37001 11.3519H11.3515V7.37046C11.3515 7.0125 11.6417 6.72231 11.9996 6.72231Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.48148 12C3.48148 7.29535 7.29535 3.48148 12 3.48148C16.7046 3.48148 20.5185 7.29535 20.5185 12C20.5185 16.7046 16.7046 20.5185 12 20.5185C7.29535 20.5185 3.48148 16.7046 3.48148 12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconAddCircleRegular);
export default ForwardRef;
