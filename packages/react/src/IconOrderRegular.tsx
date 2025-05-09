/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconOrderRegular = (
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
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M16.6145 11.5121C16.8974 11.1727 16.8515 10.6682 16.5121 10.3854C16.1727 10.1025 15.6682 10.1484 15.3854 10.4878L10.8975 15.8732L8.51212 13.8854C8.1727 13.6025 7.66825 13.6484 7.38539 13.9878C7.10254 14.3272 7.1484 14.8317 7.48782 15.1145L10.4878 17.6145C10.6508 17.7504 10.8611 17.8159 11.0724 17.7967C11.2837 17.7775 11.4787 17.6751 11.6145 17.5121L16.6145 11.5121Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V3.19995H19C20.5463 3.19995 21.7999 4.45355 21.7999 5.99995V20C21.7999 21.5463 20.5463 22.7999 19 22.7999H4.99995C3.45355 22.7999 2.19995 21.5463 2.19995 20V5.99995C2.19995 4.45355 3.45355 3.19995 4.99995 3.19995H7V3ZM7 4.79995H4.99995C4.33721 4.79995 3.79995 5.33721 3.79995 5.99995V20C3.79995 20.6627 4.33721 21.1999 4.99995 21.1999H19C19.6627 21.1999 20.1999 20.6627 20.1999 20V5.99995C20.1999 5.33721 19.6627 4.79995 19 4.79995H17V6C17 6.55228 16.5523 7 16 7H8C7.44772 7 7 6.55228 7 6V4.79995ZM8.6001 5.4001V3.6001H15.4001V5.4001H8.6001Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconOrderRegular);
export default ForwardRef;
