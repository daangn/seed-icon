import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReplyMissionRegular = (
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
    data-seed-icon-version="0.4.0"
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
          d="M17.5162 22.1801C17.763 22.3329 18.0731 22.3401 18.3267 22.1989C18.5803 22.0577 18.7374 21.7902 18.7374 21.5V18.1773C20.9039 16.4699 22.2999 13.9342 22.2999 11.0806C22.2999 5.82515 17.6099 1.69995 11.9999 1.69995C6.38997 1.69995 1.69995 5.82515 1.69995 11.0806C1.69995 16.336 6.38997 20.4612 11.9999 20.4612C12.7774 20.4612 13.5357 20.3827 14.2654 20.2336C14.6332 20.4345 15.2982 20.8284 15.965 21.2315C16.3711 21.4769 16.7591 21.7142 17.0457 21.8902C17.1889 21.9781 17.3067 22.0507 17.3886 22.1012L17.5162 22.1801ZM11.9999 3.29995C16.8834 3.29995 20.6999 6.85812 20.6999 11.0806C20.6999 13.5038 19.4579 15.6907 17.4683 17.1313C17.2605 17.2817 17.1374 17.5227 17.1374 17.7793V20.0712C17.0254 20.003 16.9098 19.9329 16.7927 19.8622C16.0007 19.3835 15.0575 18.8227 14.7064 18.6628C14.5459 18.5897 14.3656 18.5717 14.1938 18.6117C13.4939 18.7744 12.7589 18.8612 11.9999 18.8612C7.11652 18.8612 3.29995 15.3031 3.29995 11.0806C3.29995 6.85812 7.11652 3.29995 11.9999 3.29995Z"
          fill="currentColor"
        />
        <path
          d="M8.12495 8.69995C7.68312 8.69995 7.32495 9.05812 7.32495 9.49995C7.32495 9.94178 7.68312 10.3 8.12495 10.3H16C16.4418 10.3 16.8 9.94178 16.8 9.49995C16.8 9.05812 16.4418 8.69995 16 8.69995H8.12495Z"
          fill="currentColor"
        />
        <path
          d="M8.12495 12.2C7.68312 12.2 7.32495 12.5581 7.32495 13C7.32495 13.4418 7.68312 13.8 8.12495 13.8H16C16.4418 13.8 16.8 13.4418 16.8 13C16.8 12.5581 16.4418 12.2 16 12.2H8.12495Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReplyMissionRegular);
export default ForwardRef;
