import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSearchDocThin = (
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
          d="M2.19995 3.6C2.19995 2.16406 3.36401 1 4.79995 1H18.8C20.2359 1 21.4 2.16406 21.4 3.6V11.6C21.4 11.9314 21.1313 12.2 20.8 12.2C20.4686 12.2 20.2 11.9314 20.2 11.6V3.6C20.2 2.8268 19.5732 2.2 18.8 2.2H4.79995C4.02675 2.2 3.39995 2.8268 3.39995 3.6V19.6C3.39995 20.3732 4.02675 21 4.79995 21H12.8C13.1313 21 13.4 21.2686 13.4 21.6C13.4 21.9314 13.1313 22.2 12.8 22.2H4.79995C3.36401 22.2 2.19995 21.0359 2.19995 19.6V3.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 6.6C7.19995 6.26863 7.46858 6 7.79995 6H15.8C16.1313 6 16.4 6.26863 16.4 6.6C16.4 6.93137 16.1313 7.2 15.8 7.2H7.79995C7.46858 7.2 7.19995 6.93137 7.19995 6.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 10.6C7.19995 10.2686 7.46858 10 7.79995 10H15.8C16.1313 10 16.4 10.2686 16.4 10.6C16.4 10.9314 16.1313 11.2 15.8 11.2H7.79995C7.46858 11.2 7.19995 10.9314 7.19995 10.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 14.6C7.19995 14.2686 7.46858 14 7.79995 14H11.8C12.1313 14 12.4 14.2686 12.4 14.6C12.4 14.9314 12.1313 15.2 11.8 15.2H7.79995C7.46858 15.2 7.19995 14.9314 7.19995 14.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8 15.2C16.4745 15.2 15.4 16.2745 15.4 17.6C15.4 18.9255 16.4745 20 17.8 20C19.1254 20 20.2 18.9255 20.2 17.6C20.2 16.2745 19.1254 15.2 17.8 15.2ZM14.2 17.6C14.2 15.6118 15.8117 14 17.8 14C19.7882 14 21.4 15.6118 21.4 17.6C21.4 19.5882 19.7882 21.2 17.8 21.2C15.8117 21.2 14.2 19.5882 14.2 17.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.8757 19.6757C20.11 19.4414 20.4899 19.4414 20.7242 19.6757L22.2242 21.1757C22.4585 21.41 22.4585 21.7899 22.2242 22.0243C21.9899 22.2586 21.61 22.2586 21.3757 22.0243L19.8757 20.5243C19.6414 20.2899 19.6414 19.91 19.8757 19.6757Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSearchDocThin);
export default ForwardRef;
