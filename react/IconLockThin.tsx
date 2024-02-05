import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLockThin = (
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
          d="M9.3999 15.0002C9.3999 13.5642 10.564 12.4002 11.9999 12.4002C13.4358 12.4002 14.5999 13.5642 14.5999 15.0002C14.5999 16.4361 13.4358 17.6002 11.9999 17.6002C10.564 17.6002 9.3999 16.4361 9.3999 15.0002ZM11.9999 13.6002C11.2267 13.6002 10.5999 14.227 10.5999 15.0002C10.5999 15.7734 11.2267 16.4002 11.9999 16.4002C12.7731 16.4002 13.3999 15.7734 13.3999 15.0002C13.3999 14.227 12.7731 13.6002 11.9999 13.6002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.25 9.00027H4C2.89543 9.00027 2 9.8957 2 11.0003V20.0003C2 21.1048 2.89543 22.0003 4 22.0003H20C21.1046 22.0003 22 21.1048 22 20.0003V11.0003C22 9.8957 21.1046 9.00027 20 9.00027H16.75L16.7499 6.75C16.7499 4.12665 14.6233 2 11.9999 2C9.37655 2 7.2499 4.12665 7.2499 6.75L7.25 9.00027ZM15.5499 6.75L15.55 9.00027H8.45L8.4499 6.75C8.4499 4.78939 10.0393 3.2 11.9999 3.2C13.9605 3.2 15.5499 4.78939 15.5499 6.75ZM20.8 11.0003C20.8 10.5584 20.4418 10.2003 20 10.2003H4C3.55817 10.2003 3.2 10.5584 3.2 11.0003V20.0003C3.2 20.4421 3.55817 20.8003 4 20.8003H20C20.4418 20.8003 20.8 20.4421 20.8 20.0003V11.0003Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLockThin);
export default ForwardRef;
