import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCallRegular = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.46324 2.14218C2.59875 1.87115 2.87576 1.69995 3.17878 1.69995H9.32328C9.76511 1.69995 10.1233 2.05812 10.1233 2.49995V7.92852C10.1233 8.14322 10.037 8.3489 9.8838 8.49933L8.17406 10.1783C8.48378 10.995 9.14172 12.402 10.5675 13.8278C11.6814 14.9416 13.0117 15.5302 13.825 15.8295L15.506 14.1486C15.656 13.9985 15.8595 13.9142 16.0716 13.9142H21.5002C21.942 13.9142 22.3002 14.2724 22.3002 14.7142V20.8214C22.3002 21.1244 22.129 21.4014 21.858 21.5369C20.3304 22.3007 18.3884 22.3002 17.4753 22.3C17.4595 22.3 17.444 22.2999 17.4288 22.2999C8.74213 22.2999 1.70021 15.258 1.70021 6.57138C1.70021 6.55619 1.70021 6.54068 1.7002 6.52487C1.69997 5.61175 1.69946 3.66975 2.46324 2.14218ZM3.70619 3.29995C3.31099 4.39718 3.30021 5.72714 3.30021 6.57138C3.30021 14.3744 9.62579 20.6999 17.4288 20.6999C18.273 20.6999 19.603 20.6892 20.7002 20.294V15.5142H16.403L14.6016 17.3156C14.3873 17.5299 14.0704 17.6047 13.7829 17.5089C13.0903 17.278 11.0851 16.6081 9.43617 14.9592C7.42264 12.9456 6.73359 10.9442 6.49127 10.2172C6.39461 9.92726 6.47162 9.60758 6.68969 9.39343L8.52328 7.59288V3.29995H3.70619Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(IconCallRegular);
export default ForwardRef;
