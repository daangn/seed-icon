import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconEmoticonBadFill = (
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
        d="M12 2.2002C6.58756 2.2002 2.19995 6.58781 2.19995 12.0002C2.19995 17.4126 6.58756 21.8002 12 21.8002C17.4123 21.8002 21.8 17.4126 21.8 12.0002C21.8 6.58781 17.4123 2.2002 12 2.2002ZM8.39995 11.8002C9.17315 11.8002 9.79995 11.1734 9.79995 10.4002C9.79995 9.627 9.17315 9.0002 8.39995 9.0002C7.62675 9.0002 6.99995 9.627 6.99995 10.4002C6.99995 11.1734 7.62675 11.8002 8.39995 11.8002ZM17.0001 10.4002C17.0001 11.1734 16.3733 11.8002 15.6001 11.8002C14.8269 11.8002 14.2001 11.1734 14.2001 10.4002C14.2001 9.627 14.8269 9.0002 15.6001 9.0002C16.3733 9.0002 17.0001 9.627 17.0001 10.4002ZM9.64019 16.48C9.3751 16.8334 8.87366 16.9051 8.52019 16.64C8.16673 16.3749 8.0951 15.8734 8.36019 15.52C8.65629 15.1252 9.81376 13.7 12.0002 13.7C14.1866 13.7 15.3441 15.1252 15.6402 15.52C15.9053 15.8734 15.8337 16.3749 15.4802 16.64C15.1267 16.9051 14.6253 16.8334 14.3602 16.48C14.1563 16.2081 13.4138 15.3 12.0002 15.3C10.5866 15.3 9.8441 16.2081 9.64019 16.48Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconEmoticonBadFill);
export default ForwardRef;
