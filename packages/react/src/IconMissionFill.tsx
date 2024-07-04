/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMissionFill = (
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
    data-seed-icon-version="0.7.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99958 3.29984C7.12398 3.31853 9.70061 3.45142 11.2 4.39669V17.9775C9.70061 17.1898 7.12399 17.0791 4.99958 17.0635C4.44731 17.0595 4 16.6132 4 16.061V4.29679C4 3.7445 4.44731 3.29499 4.99958 3.29984ZM19.0004 17.0635C16.876 17.0791 14.2993 17.1898 12.8 17.9776V4.39675C14.2993 3.45143 16.876 3.31853 19.0004 3.29984C19.5527 3.29499 20 3.7445 20 4.29679V16.061C20 16.6132 19.5527 17.0595 19.0004 17.0635ZM15.3605 18.8433C13.9913 19.0666 13.045 19.4413 12.5998 19.9427C12.5121 20.0495 12.3964 20.1341 12.2609 20.1845C11.9477 20.3011 11.595 20.2107 11.3765 19.9579C10.9368 19.4491 9.98551 19.0693 8.60307 18.8438C7.26947 18.6262 5.73379 18.5805 4.33954 18.5715C3.35111 18.5652 2.54541 17.765 2.54541 16.7693V5.7422C1.67186 5.86588 1 6.61665 1 7.52434V18.7971C1 19.7912 1.80589 20.5971 2.8 20.5971H21.1636C22.1577 20.5971 22.9636 19.7912 22.9636 18.7971V7.52434C22.9636 6.61661 22.2917 5.86581 21.4181 5.74219V16.7688C21.4181 17.7645 20.6124 18.5646 19.624 18.571C18.2297 18.58 16.6941 18.6257 15.3605 18.8433Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMissionFill);
export default ForwardRef;
