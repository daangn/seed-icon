import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconUserGroupThin = (
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
    data-seed-icon-version="0.5.7"
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
          d="M9.44244 8.91793C9.44244 5.75705 11.9995 3.19995 15.1604 3.19995C18.3213 3.19995 20.8784 5.75705 20.8784 8.91793C20.8784 10.736 20.0288 12.3509 18.7049 13.3962C21.2933 14.6976 23.0718 17.375 23.0718 20.47C23.0718 20.8013 22.8032 21.07 22.4718 21.07C22.1405 21.07 21.8718 20.8013 21.8718 20.47C21.8718 17.4848 19.9199 14.9533 17.2204 14.0804C16.9877 14.0051 16.8239 13.7961 16.8065 13.5521C16.7892 13.3082 16.9216 13.078 17.1413 12.9705C18.648 12.2334 19.6784 10.697 19.6784 8.91793C19.6784 6.41979 17.6586 4.39995 15.1604 4.39995C12.6623 4.39995 10.6424 6.41979 10.6424 8.91793C10.6424 10.6972 11.6803 12.2403 13.1786 12.9701C13.3986 13.0773 13.5315 13.3074 13.5143 13.5516C13.4972 13.7958 13.3334 14.0051 13.1004 14.0804C10.4007 14.9535 8.44902 17.4778 8.44902 20.47C8.44902 20.8013 8.18039 21.07 7.84902 21.07C7.51765 21.07 7.24902 20.8013 7.24902 20.47C7.24902 17.3686 9.02747 14.6964 11.6153 13.3963C10.2951 12.3526 9.44244 10.734 9.44244 8.91793Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.59332 8.91793C3.59332 5.75705 6.15042 3.19995 9.31131 3.19995C9.64268 3.19995 9.91131 3.46858 9.91131 3.79995C9.91131 4.13132 9.64268 4.39995 9.31131 4.39995C6.81316 4.39995 4.79332 6.41979 4.79332 8.91793C4.79332 10.6972 5.83114 12.2403 7.32944 12.9701C7.54952 13.0773 7.68241 13.3074 7.66523 13.5516C7.64805 13.7958 7.48424 14.0051 7.25132 14.0804C4.55154 14.9535 2.5999 17.4778 2.5999 20.47C2.5999 20.8013 2.33127 21.07 1.9999 21.07C1.66853 21.07 1.3999 20.8013 1.3999 20.47C1.3999 17.3686 3.17835 14.6964 5.76614 13.3963C4.44594 12.3526 3.59332 10.734 3.59332 8.91793Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconUserGroupThin);
export default ForwardRef;
