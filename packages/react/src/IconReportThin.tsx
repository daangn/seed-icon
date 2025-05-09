/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReportThin = (
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
          d="M16.4999 11.8999C16.8313 11.8999 17.0999 12.1685 17.0999 12.4999C17.0999 12.8313 16.8313 13.0999 16.4999 13.0999C16.1685 13.0999 15.8999 12.8313 15.8999 12.4999C15.8999 12.1685 16.1685 11.8999 16.4999 11.8999Z"
          fill="currentColor"
        />
        <path
          d="M11.3999 6.4999C11.3999 6.16853 11.6685 5.8999 11.9999 5.8999C12.7645 5.8999 13.9089 6.12439 14.9306 6.79926C15.9746 7.48885 16.872 8.63933 17.0953 10.4255C17.1364 10.7543 16.9031 11.0542 16.5743 11.0953C16.2455 11.1364 15.9456 10.9031 15.9045 10.5743C15.7278 9.16048 15.0419 8.31096 14.2692 7.80054C13.4742 7.27541 12.5687 7.0999 11.9999 7.0999C11.6685 7.0999 11.3999 6.83127 11.3999 6.4999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.3999C7.99594 3.3999 4.75 6.64584 4.75 10.6499V16.8H4.1399C3.73121 16.8 3.3999 17.1314 3.3999 17.54V20.06C3.3999 20.4687 3.73121 20.8 4.1399 20.8H19.8599C20.2686 20.8 20.5999 20.4687 20.5999 20.06V17.54C20.5999 17.1314 20.2686 16.8 19.8599 16.8H19.25V10.6499C19.25 6.64584 16.0041 3.3999 12 3.3999ZM18.05 16.8V10.6499C18.05 7.30858 15.3413 4.5999 12 4.5999C8.65868 4.5999 5.95 7.30858 5.95 10.6499V16.8H18.05ZM4.5999 19.6V18H19.3999V19.6H4.5999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReportThin);
export default ForwardRef;
