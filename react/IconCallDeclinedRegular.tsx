import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCallDeclinedRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17878 1.69995C2.87576 1.69995 2.59875 1.87115 2.46324 2.14218C1.69946 3.66975 1.69997 5.61175 1.7002 6.52487L1.70021 6.57138C1.70021 15.258 8.74213 22.2999 17.4288 22.2999L17.4753 22.3C18.3884 22.3002 20.3304 22.3007 21.858 21.5369C22.129 21.4014 22.3002 21.1244 22.3002 20.8214V14.7142C22.3002 14.2724 21.942 13.9142 21.5002 13.9142H16.0716C15.8595 13.9142 15.656 13.9985 15.506 14.1486L13.825 15.8295C13.0117 15.5302 11.6814 14.9416 10.5675 13.8278C9.14172 12.402 8.48378 10.995 8.17406 10.1783L9.8838 8.49933C10.037 8.3489 10.1233 8.14322 10.1233 7.92852V2.49995C10.1233 2.05812 9.76511 1.69995 9.32328 1.69995H3.17878ZM3.30021 6.57138C3.30021 5.72714 3.31099 4.39718 3.70619 3.29995H8.52328V7.59288L6.68969 9.39343C6.47162 9.60758 6.39461 9.92726 6.49127 10.2172C6.73359 10.9442 7.42264 12.9456 9.43617 14.9592C11.0851 16.6081 13.0903 17.278 13.7829 17.5089C14.0704 17.6047 14.3873 17.5299 14.6016 17.3156L16.403 15.5142H20.7002V20.294C19.603 20.6892 18.273 20.6999 17.4288 20.6999C9.62579 20.6999 3.30021 14.3744 3.30021 6.57138ZM15.5659 3.43427C15.2535 3.12185 14.7469 3.12185 14.4345 3.43427C14.1221 3.74669 14.1221 4.25322 14.4345 4.56564L16.3688 6.49995L14.4345 8.43427C14.1221 8.74669 14.1221 9.25322 14.4345 9.56564C14.7469 9.87806 15.2535 9.87806 15.5659 9.56564L17.5002 7.63132L19.4345 9.56564C19.7469 9.87806 20.2535 9.87806 20.5659 9.56564C20.8783 9.25322 20.8783 8.74669 20.5659 8.43427L18.6316 6.49995L20.5659 4.56564C20.8783 4.25322 20.8783 3.74669 20.5659 3.43427C20.2535 3.12185 19.7469 3.12185 19.4345 3.43427L17.5002 5.36858L15.5659 3.43427Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCallDeclinedRegular);
export default ForwardRef;
