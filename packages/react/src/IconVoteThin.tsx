/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVoteThin = (
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
    data-seed-icon-version="0.7.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M16.4565 9.98927C16.6715 9.7371 16.6413 9.3584 16.3892 9.14341C16.137 8.92843 15.7583 8.95857 15.5433 9.21073L10.8528 14.7124L8.42753 12.2483C8.19508 12.0121 7.8152 12.0091 7.57903 12.2415C7.34285 12.474 7.33983 12.8538 7.57228 13.09L10.4569 16.0209C10.5749 16.1408 10.7378 16.2056 10.906 16.1996C11.0741 16.1936 11.232 16.1173 11.3411 15.9893L16.4565 9.98927Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.3999 5.6C3.3999 4.16406 4.56396 3 5.9999 3H17.9999C19.4358 3 20.5999 4.16406 20.5999 5.6V20H21.9999C22.3313 20 22.5999 20.2686 22.5999 20.6C22.5999 20.9314 22.3313 21.2 21.9999 21.2H1.9999C1.66853 21.2 1.3999 20.9314 1.3999 20.6C1.3999 20.2686 1.66853 20 1.9999 20H3.3999V5.6ZM19.3999 5.6V20H4.5999V5.6C4.5999 4.8268 5.2267 4.2 5.9999 4.2H17.9999C18.7731 4.2 19.3999 4.8268 19.3999 5.6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVoteThin);
export default ForwardRef;
