import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLoudspeakerRegular = (
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
        d="M21.8002 3.49995C21.8002 3.20492 21.6378 2.93383 21.3777 2.79461C21.1176 2.6554 20.8019 2.67066 20.5564 2.83431L14.758 6.69995H7.0002C4.34923 6.69995 2.2002 8.84899 2.2002 11.5C2.2002 13.8783 3.93002 15.8527 6.2002 16.2336V17.5C6.2002 19.5986 7.90151 21.3 10.0002 21.3C12.0989 21.3 13.8002 19.5986 13.8002 17.5V16.3H14.758L20.5564 20.1656C20.8019 20.3292 21.1176 20.3445 21.3777 20.2053C21.6378 20.0661 21.8002 19.795 21.8002 19.5V3.49995ZM12.2002 16.3H7.8002V17.5C7.8002 18.715 8.78517 19.7 10.0002 19.7C11.2152 19.7 12.2002 18.715 12.2002 17.5V16.3ZM15.0002 14.7C15.1581 14.7 15.3125 14.7467 15.444 14.8343L20.2002 18.0051V4.99477L15.444 8.16559C15.3125 8.2532 15.1581 8.29995 15.0002 8.29995H7.0002C5.23288 8.29995 3.8002 9.73264 3.8002 11.5C3.8002 13.2673 5.23288 14.7 7.0002 14.7H15.0002Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLoudspeakerRegular);
export default ForwardRef;
