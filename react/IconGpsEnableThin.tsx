import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconGpsEnableThin = (
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
    <g>
      <g>
        <path
          d="M12.569 1.56897C12.569 1.25473 12.3142 1 12 1C11.6858 1 11.431 1.25473 11.431 1.56897V2.91404C6.85654 3.19614 3.19614 6.85654 2.91404 11.431H1.56897C1.25473 11.431 1 11.6858 1 12C1 12.3142 1.25473 12.569 1.56897 12.569H2.91404C3.19614 17.1435 6.85654 20.8039 11.431 21.086V22.431C11.431 22.7453 11.6858 23 12 23C12.3142 23 12.569 22.7453 12.569 22.431V21.086C13.1455 21.0504 13.7075 20.9612 14.25 20.8233V19.6433C13.5365 19.853 12.7814 19.9655 12 19.9655C7.60077 19.9655 4.03448 16.3992 4.03448 12C4.03448 7.60077 7.60077 4.03448 12 4.03448C15.6179 4.03448 18.6724 6.4464 19.6433 9.75H20.8233C19.8667 5.98758 16.567 3.16059 12.569 2.91404V1.56897Z"
          fill="currentColor"
        />
        <path
          d="M20.5868 13.2435C21.2595 13.8642 21.6583 14.783 21.517 15.8918C21.3724 17.0259 20.5327 17.6026 19.9313 18.0156C19.8858 18.0469 19.8413 18.0774 19.7989 18.107C19.143 18.5644 18.7558 18.9019 18.7558 19.6166C18.7558 19.9424 18.4916 20.2066 18.1658 20.2066C17.8399 20.2066 17.5758 19.9424 17.5758 19.6166C17.5758 18.2547 18.455 17.6056 19.1239 17.1391L19.1562 17.1166C19.8589 16.6267 20.2703 16.3398 20.3464 15.7426C20.4379 15.025 20.188 14.4811 19.7866 14.1108C19.3712 13.7275 18.7768 13.5176 18.1901 13.5419C16.977 13.5921 15.9898 14.5198 15.9898 15.6181C15.9898 15.9439 15.7257 16.2081 15.3998 16.2081C15.074 16.2081 14.8098 15.9439 14.8098 15.6181C14.8098 13.7719 16.4178 12.4342 18.1414 12.3629C19.023 12.3264 19.928 12.6357 20.5868 13.2435Z"
          fill="currentColor"
        />
        <path
          d="M18.85 22.075C18.85 22.4478 18.5478 22.75 18.175 22.75C17.8022 22.75 17.5 22.4478 17.5 22.075C17.5 21.7022 17.8022 21.4 18.175 21.4C18.5478 21.4 18.85 21.7022 18.85 22.075Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconGpsEnableThin);
export default ForwardRef;
