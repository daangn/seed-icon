import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconGpsThin = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12ZM15.55 12C15.55 13.9606 13.9606 15.55 12 15.55C10.0394 15.55 8.45 13.9606 8.45 12C8.45 10.0394 10.0394 8.45 12 8.45C13.9606 8.45 15.55 10.0394 15.55 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.569 1.56897C12.569 1.25473 12.3142 1 12 1C11.6858 1 11.431 1.25473 11.431 1.56897V2.91404C6.85654 3.19614 3.19614 6.85654 2.91404 11.431H1.56897C1.25473 11.431 1 11.6858 1 12C1 12.3142 1.25473 12.569 1.56897 12.569H2.91404C3.19614 17.1435 6.85654 20.8039 11.431 21.086V22.431C11.431 22.7453 11.6858 23 12 23C12.3142 23 12.569 22.7453 12.569 22.431V21.086C17.1435 20.8039 20.8039 17.1435 21.086 12.569H22.431C22.7453 12.569 23 12.3142 23 12C23 11.6858 22.7453 11.431 22.431 11.431H21.086C20.8039 6.85654 17.1435 3.19614 12.569 2.91404V1.56897ZM4.03448 12C4.03448 7.60077 7.60077 4.03448 12 4.03448C16.3992 4.03448 19.9655 7.60077 19.9655 12C19.9655 16.3992 16.3992 19.9655 12 19.9655C7.60077 19.9655 4.03448 16.3992 4.03448 12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconGpsThin);
export default ForwardRef;
