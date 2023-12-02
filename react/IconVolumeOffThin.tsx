import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVolumeOffThin = (
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
    data-seed-icon-version="0.5.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M13.8786 3.78691L8.81023 8.13121C8.77399 8.16228 8.72782 8.17935 8.68008 8.17935H5.05C4.05589 8.17935 3.25 8.98524 3.25 9.97935V14.9794C3.25 15.806 3.80724 16.5025 4.56658 16.7137H5.2958C5.60904 16.7137 5.86297 16.4598 5.86297 16.1465C5.86297 15.8333 5.60904 15.5794 5.2958 15.5794H5.05C4.71863 15.5794 4.45 15.3107 4.45 14.9794V9.97935C4.45 9.64798 4.71863 9.37935 5.05 9.37935H8.68008C9.01427 9.37935 9.33744 9.25981 9.59118 9.04231L14.6595 4.69802C15.0487 4.36442 15.65 4.64096 15.65 5.15358V6.41571C15.65 6.74708 15.9186 7.01571 16.25 7.01571C16.5814 7.01571 16.85 6.74708 16.85 6.41571V5.15358C16.85 3.61574 15.0462 2.7861 13.8786 3.78691Z"
          fill="currentColor"
        />
        <path
          d="M10.5534 18.0364C10.2385 17.8114 10.2158 17.3515 10.5071 17.0966C10.7165 16.9133 11.0245 16.8981 11.2509 17.0599L14.7013 19.5244C15.0984 19.8081 15.65 19.5242 15.65 19.0362V12.1465C15.65 11.8152 15.9186 11.5465 16.25 11.5465C16.5814 11.5465 16.85 11.8152 16.85 12.1465V19.0362C16.85 20.5002 15.1951 21.3519 14.0038 20.5009L10.5534 18.0364Z"
          fill="currentColor"
        />
        <path
          d="M20.3951 6.45155C20.6445 6.23334 20.6698 5.85428 20.4515 5.6049C20.2333 5.35552 19.8543 5.33024 19.6049 5.54845L3.6049 19.5485C3.35552 19.7667 3.33024 20.1457 3.54845 20.3951C3.76666 20.6445 4.14572 20.6698 4.3951 20.4515L20.3951 6.45155Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVolumeOffThin);
export default ForwardRef;
