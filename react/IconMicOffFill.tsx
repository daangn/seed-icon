import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMicOffFill = (
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
    data-seed-icon-version="0.5.5"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M7 11.5V5.5C7 2.73859 9.23859 0.5 12 0.5C14.2992 0.5 16.2359 2.05186 16.8199 4.16527C16.9056 4.47565 16.7963 4.80153 16.5695 5.03011L8.12933 13.536C7.89732 13.7698 7.50579 13.7186 7.37959 13.4144C7.135 12.8247 7 12.1781 7 11.5Z"
          fill="currentColor"
        />
        <path
          d="M21.0659 3.43433C21.3783 3.74675 21.3783 4.25328 21.0659 4.5657L16.9999 8.63172V11.5C16.9999 14.2614 14.7613 16.5 11.9999 16.5C11.1682 16.5 10.3839 16.2969 9.69391 15.9377L8.08681 17.5448C9.21333 18.2758 10.5564 18.7 12.0002 18.7C15.9767 18.7 19.2002 15.4765 19.2002 11.5C19.2002 11.0582 19.5584 10.7 20.0002 10.7C20.442 10.7 20.8002 11.0582 20.8002 11.5C20.8002 16.0905 17.2854 19.86 12.8002 20.2641V21.7H15.0002C15.442 21.7 15.8002 22.0582 15.8002 22.5C15.8002 22.9418 15.442 23.3 15.0002 23.3H9.0002C8.55837 23.3 8.2002 22.9418 8.2002 22.5C8.2002 22.0582 8.55837 21.7 9.0002 21.7H11.2002V20.2641C9.62158 20.1217 8.16224 19.5621 6.93481 18.6968L4.56588 21.0657C4.25346 21.3781 3.74693 21.3781 3.43451 21.0657C3.12209 20.7533 3.12209 20.2467 3.43451 19.9343L19.9345 3.43433C20.2469 3.12191 20.7535 3.12191 21.0659 3.43433Z"
          fill="currentColor"
        />
        <path
          d="M4.8002 11.5C4.8002 11.0582 4.44202 10.7 4.0002 10.7C3.55837 10.7 3.2002 11.0582 3.2002 11.5C3.2002 13.2206 3.69482 14.8282 4.54996 16.1854C4.7855 16.5592 5.27947 16.6713 5.65328 16.4357C6.02709 16.2002 6.13919 15.7062 5.90366 15.3324C5.2047 14.2231 4.8002 12.91 4.8002 11.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMicOffFill);
export default ForwardRef;
