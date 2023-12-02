import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoRegular = (
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
    data-seed-icon-version="0.4.1"
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
          d="M8.60029 6.00018C7.0539 6.00018 5.80029 7.25379 5.80029 8.80018C5.80029 10.3466 7.0539 11.6002 8.60029 11.6002C10.1467 11.6002 11.4003 10.3466 11.4003 8.80018C11.4003 7.25379 10.1467 6.00018 8.60029 6.00018ZM7.40029 8.80018C7.40029 8.13744 7.93755 7.60018 8.60029 7.60018C9.26303 7.60018 9.80029 8.13744 9.80029 8.80018C9.80029 9.46292 9.26303 10.0002 8.60029 10.0002C7.93755 10.0002 7.40029 9.46292 7.40029 8.80018Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.0002 2.2002C3.90151 2.2002 2.2002 3.90151 2.2002 6.0002V18.0002C2.2002 20.0989 3.90151 21.8002 6.0002 21.8002H18.0002C20.0989 21.8002 21.8002 20.0989 21.8002 18.0002V6.0002C21.8002 3.90151 20.0989 2.2002 18.0002 2.2002H6.0002ZM3.8002 6.0002C3.8002 4.78517 4.78517 3.8002 6.0002 3.8002H18.0002C19.2152 3.8002 20.2002 4.78517 20.2002 6.0002V15.069L16.3657 11.2345C16.2157 11.0845 16.0122 11.0002 15.8 11.0002C15.5878 11.0002 15.3843 11.0845 15.2343 11.2345L10.8001 15.6687L8.56588 13.4345C8.25346 13.1221 7.74693 13.1221 7.43451 13.4345L3.8002 17.0688V6.0002ZM10.2447 17.3761L12.4345 19.5659C12.7469 19.8783 13.2535 19.8783 13.5659 19.5659C13.8783 19.2535 13.8783 18.7469 13.5659 18.4345L11.9315 16.8001L15.8 12.9316L20.2002 17.3317V18.0002C20.2002 19.2152 19.2152 20.2002 18.0002 20.2002H6.0002C5.16938 20.2002 4.44614 19.7397 4.0718 19.06L8.0002 15.1316L10.2241 17.3555C10.2275 17.3589 10.2309 17.3624 10.2343 17.3659C10.2378 17.3693 10.2412 17.3727 10.2447 17.3761Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPhotoRegular);
export default ForwardRef;
