import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLockFill = (
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
        d="M12 2C9.34903 2 7.2 4.14903 7.2 6.8L7.2002 9.00022H4C2.89543 9.00022 2 9.89565 2 11.0002V20.0002C2 21.1048 2.89543 22.0002 4 22.0002H20C21.1046 22.0002 22 21.1048 22 20.0002V11.0002C22 9.89565 21.1046 9.00022 20 9.00022H16.8002L16.8 6.8C16.8 4.14903 14.651 2 12 2ZM15.2002 9.00022L15.2 6.8C15.2 5.03269 13.7673 3.6 12 3.6C10.2327 3.6 8.8 5.03269 8.8 6.8L8.8002 9.00022H15.2002ZM14 14.5C14 15.6046 13.1046 16.5 12 16.5C10.8954 16.5 10 15.6046 10 14.5C10 13.3955 10.8954 12.5 12 12.5C13.1046 12.5 14 13.3955 14 14.5Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLockFill);
export default ForwardRef;
