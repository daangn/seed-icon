import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDownloadRegular = (
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
        d="M12.0002 1.69995C12.442 1.69995 12.8002 2.05812 12.8002 2.49995V16.5686L18.4345 10.9343C18.7469 10.6218 19.2535 10.6218 19.5659 10.9343C19.8783 11.2467 19.8783 11.7532 19.5659 12.0656L12.5659 19.0656C12.2535 19.3781 11.7469 19.3781 11.4345 19.0656L4.43451 12.0656C4.12209 11.7532 4.12209 11.2467 4.43451 10.9343C4.74693 10.6218 5.25346 10.6218 5.56588 10.9343L11.2002 16.5686V2.49995C11.2002 2.05812 11.5584 1.69995 12.0002 1.69995ZM4.2002 21.5C4.2002 21.0581 4.55837 20.7 5.0002 20.7H19.0002C19.442 20.7 19.8002 21.0581 19.8002 21.5C19.8002 21.9418 19.442 22.2999 19.0002 22.2999H5.0002C4.55837 22.2999 4.2002 21.9418 4.2002 21.5Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDownloadRegular);
export default ForwardRef;
